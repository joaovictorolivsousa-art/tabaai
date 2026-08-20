"use client";

import { useMemo, useRef, MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import lagoonVertex from "./shaders/lagoonVertex";
import lagoonFragment from "./shaders/lagoonFragment";

interface LagoonSceneProps {
  scrollProgress: MutableRefObject<number>;
  mouseNdc: MutableRefObject<{ x: number; y: number; strength: number }>;
  segments: number;
}

const PLANE_SIZE = 34;

export default function LagoonScene({
  scrollProgress,
  mouseNdc,
  segments,
}: LagoonSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: lagoonVertex,
      fragmentShader: lagoonFragment,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMouseStrength: { value: 0 },
        uColorDeep: { value: new THREE.Color(0x05221f) },
        uColorMid: { value: new THREE.Color(0x1e5c5a) },
        uColorFoam: { value: new THREE.Color(0x7fe7c4) },
      },
    });
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      PLANE_SIZE,
      PLANE_SIZE,
      segments,
      segments
    );
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, [segments]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    material.uniforms.uTime.value = t;

    // ripple decay
    mouseNdc.current.strength *= 0.985;

    const worldX = mouseNdc.current.x * PLANE_SIZE * 0.5;
    const worldY = -mouseNdc.current.y * PLANE_SIZE * 0.5;
    material.uniforms.uMouse.value.set(worldX, worldY);
    material.uniforms.uMouseStrength.value = mouseNdc.current.strength;

    // camera narrative: drifts down/forward as the user scrolls the page
    const progress = scrollProgress.current;
    const targetY = 7.2 - progress * 3.6;
    const targetZ = 9.5 - progress * 4.2;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.04;
    camera.position.x += (Math.sin(mouseNdc.current.x * 0.5) * 1.1 - camera.position.x) * 0.02;
    camera.lookAt(0, -progress * 1.2, 0);
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}
