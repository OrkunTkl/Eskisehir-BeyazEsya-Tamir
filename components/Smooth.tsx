"use client";
import { useEffect } from "react";

// Pürüzsüz kaydırma yalnızca fare/trackpad'li cihazda ve sayfa boşa çıktıktan sonra yüklenir.
// Dokunmatik cihazda yerel kaydırma zaten akıcıdır; Lenis hiç indirilmez.
export function Smooth() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let dead = false;
    let stop = () => {};
    const start = async () => {
      const { default: Lenis } = await import("lenis");
      if (dead) return;
      const l = new Lenis({ lerp: 0.075, wheelMultiplier: 0.9 });
      let id = requestAnimationFrame(function raf(t) {
        l.raf(t);
        id = requestAnimationFrame(raf);
      });
      stop = () => {
        cancelAnimationFrame(id);
        l.destroy();
      };
    };
    const idle = typeof window.requestIdleCallback === "function";
    const h = idle
      ? window.requestIdleCallback(() => void start(), { timeout: 2500 })
      : window.setTimeout(() => void start(), 1200);
    return () => {
      dead = true;
      if (idle) window.cancelIdleCallback(h);
      else window.clearTimeout(h);
      stop();
    };
  }, []);
  return null;
}
