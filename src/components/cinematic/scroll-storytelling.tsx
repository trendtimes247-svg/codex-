"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollStorytelling() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const contexts = (gsap.utils.toArray("[data-story-reveal]") as HTMLElement[]).map((element: HTMLElement) => gsap.fromTo(element, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 82%", once: true } }));
    return () => { contexts.forEach((animation: { kill: () => void }) => animation.kill()); ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) => trigger.kill()); };
  }, []);
  return null;
}
