"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { frame, cancelFrame } from "framer-motion";
import { useEffect, useRef } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.08, // smoother follow speed
        duration: 1.2, // longer easing curve
        wheelMultiplier: 0.9, // slower/more controlled
        touchMultiplier: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // buttery easing
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
