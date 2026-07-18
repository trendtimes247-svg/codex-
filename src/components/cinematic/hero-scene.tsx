"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function ParticleField({ reduced }: { reduced: boolean }) {
  const points = useMemo(() => Array.from({ length: 72 }, (_, index) => ({ position: [(Math.sin(index * 12.989) * 2.4), (Math.cos(index * 7.31) * 1.6), (Math.sin(index * 3.17) * 1.2)] as [number, number, number], scale: 0.015 + (index % 5) * 0.004 })), []);
  const group = useRef<{ rotation: { y: number } } | null>(null);
  useFrame((_state: unknown, delta: number) => { if (!reduced && group.current) group.current.rotation.y += delta * 0.08; });
  return <group ref={group}>{points.map((point: { position: [number, number, number]; scale: number }, index: number) => <mesh key={index} position={point.position}><sphereGeometry args={[point.scale, 8, 8]} /><meshBasicMaterial color={index % 3 === 0 ? "#E3C276" : "#72D6C9"} transparent opacity={0.72} /></mesh>)}</group>;
}

function CoreScene({ reduced }: { reduced: boolean }) {
  const group = useRef<{ rotation: { x: number; y: number } } | null>(null);
  useFrame((_state: unknown, delta: number) => { if (!reduced && group.current) { group.current.rotation.y += delta * 0.12; group.current.rotation.x = Math.sin(Date.now() * 0.00025) * 0.08; } });
  return <group ref={group}><ambientLight intensity={0.7} /><directionalLight position={[3, 2, 4]} intensity={1.2} /><pointLight position={[-2, -1, 2]} intensity={0.6} color="#E3C276" /><Float speed={reduced ? 0 : 1.2} rotationIntensity={reduced ? 0 : 0.25} floatIntensity={reduced ? 0 : 0.35}><Sphere args={[1.08, 48, 48]}><meshStandardMaterial color="#0B3D3A" roughness={0.42} metalness={0.18} emissive="#072b28" emissiveIntensity={0.18} /></Sphere></Float><ParticleField reduced={reduced} /></group>;
}

function SceneFallback({ children }: { children?: ReactNode }) {
  return <div className="grid aspect-[4/5] place-items-center rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_35%,hsl(var(--accent)/.38),transparent_25%),linear-gradient(135deg,hsl(var(--primary)),#365A53,hsl(var(--accent)))] p-6 text-primary-foreground"><div className="rounded-xl border border-white/20 bg-black/15 p-6 text-center backdrop-blur-sm"><p className="font-display text-5xl font-semibold">128k+</p><p className="mt-2 text-sm text-white/75">verified acts of support recorded across programs</p>{children}</div></div>;
}

export function HeroScene({ label = "Animated trust and impact field" }: { label?: string }) {
  const reduced = usePrefersReducedMotion();
  const [webgl, setWebgl] = useState(true);
  if (reduced || !webgl) return <SceneFallback><span className="sr-only">{label}</span></SceneFallback>;
  return <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#08110F]" role="img" aria-label={label}><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.2], fov: 42 }} gl={{ antialias: true, powerPreference: "high-performance" }} onCreated={({ gl }: { gl: { setClearColor: (color: string, alpha: number) => void } }) => { gl.setClearColor("#08110F", 1); }} onError={() => setWebgl(false)}><CoreScene reduced={reduced} /></Canvas></div>;
}
