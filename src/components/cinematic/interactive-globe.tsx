"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";

export type GlobeMarker = { label: string; region: string; position: [number, number, number] };
const defaultMarkers: GlobeMarker[] = [
  { label: "Education access", region: "East Africa", position: [0.8, 0.35, 0.72] },
  { label: "Community health", region: "South Asia", position: [-0.72, 0.12, 0.82] },
  { label: "Climate resilience", region: "Coastal regions", position: [0.18, -0.55, 0.92] }
];

function useReducedMotion() { const [reduced, setReduced] = useState(false); useEffect(() => { const query = window.matchMedia("(prefers-reduced-motion: reduce)"); setReduced(query.matches); const onChange = () => setReduced(query.matches); query.addEventListener("change", onChange); return () => query.removeEventListener("change", onChange); }, []); return reduced; }
function StaticGlobe({ markers }: { markers: GlobeMarker[] }) { return <div className="rounded-xl border bg-surface p-5"><div className="grid aspect-[16/9] place-items-center rounded-lg bg-[radial-gradient(circle,hsl(var(--primary)/.24),transparent_55%)]"><span className="sr-only">Static impact map fallback</span></div><ul className="mt-4 grid gap-2 text-sm">{markers.map((marker) => <li key={marker.label} className="rounded-md bg-muted p-3"><strong>{marker.label}</strong><span className="block text-foreground/65">{marker.region}</span></li>)}</ul></div>; }

export function InteractiveGlobe({ markers = defaultMarkers }: { markers?: GlobeMarker[] }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(markers[0]);
  if (reduced) return <StaticGlobe markers={markers} />;
  return <div className="rounded-xl border bg-surface p-5"><div className="aspect-[16/9] overflow-hidden rounded-lg bg-[#08110F]" role="img" aria-label="Interactive globe showing project regions"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 3.4], fov: 45 }}><ambientLight intensity={0.8} /><directionalLight position={[3, 2, 4]} intensity={1.1} /><Sphere args={[1, 48, 48]}><meshStandardMaterial color="#0B3D3A" roughness={0.55} metalness={0.1} /></Sphere>{markers.map((marker) => <mesh key={marker.label} position={marker.position} onPointerOver={() => setActive(marker)}><sphereGeometry args={[0.045, 16, 16]} /><meshBasicMaterial color="#E3C276" /></mesh>)}<OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} /></Canvas></div><div className="mt-4 flex flex-wrap gap-2" aria-label="Project markers">{markers.map((marker) => <button key={marker.label} className="min-h-11 rounded-md border px-3 text-sm aria-pressed:bg-primary aria-pressed:text-primary-foreground" aria-pressed={active.label === marker.label} onFocus={() => setActive(marker)} onClick={() => setActive(marker)}>{marker.label}</button>)}</div><p className="mt-3 text-sm text-foreground/70"><strong>{active.label}</strong> — {active.region}</p></div>;
}
