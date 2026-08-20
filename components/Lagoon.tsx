"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LagoonScene from "./LagoonScene";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

export default function Lagoon() {
  const [supported, setSupported] = useState<boolean | null>(null);
  const scrollProgress = useRef(0);
  const mouseNdc = useRef({ x: 0, y: 0, strength: 0 });
  const segmentsRef = useRef(140);

  useEffect(() => {
    const smallScreen = window.innerWidth < 620;
    segmentsRef.current = smallScreen ? 64 : 140;
    setSupported(detectWebGL());

    const onPointerMove = (e: PointerEvent) => {
      mouseNdc.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNdc.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseNdc.current.strength = 0.9;
    };
    const onPointerDown = () => {
      mouseNdc.current.strength = 1.6;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (supported === false) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 30%, rgba(127,231,196,.14), transparent 60%), radial-gradient(70% 60% at 75% 70%, rgba(30,92,90,.5), transparent 65%), linear-gradient(180deg, #071A19 0%, #04100F 100%)",
          }}
        />
      </div>
    );
  }

  // Avoid rendering the canvas until we know the device supports WebGL
  if (supported === null) {
    return <div className="absolute inset-0 bg-bg-deep" />;
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 7.2, 9.5], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, typeof window !== "undefined" && window.innerWidth < 620 ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <LagoonScene
          scrollProgress={scrollProgress}
          mouseNdc={mouseNdc}
          segments={segmentsRef.current}
        />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,11,10,.15) 0%, rgba(3,11,10,.35) 60%, #05100F 100%)",
        }}
      />
    </div>
  );
}
