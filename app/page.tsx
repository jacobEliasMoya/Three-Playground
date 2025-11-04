"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

interface EarthProps {
  color: string;
}
interface MoonProps {
  color: string;
}
export default function Home() {
  const [active, setActive] = useState<boolean>(false);
  const [activeMoon, setActiveMoon] = useState<boolean>(false);

  const earthMap = useLoader(THREE.TextureLoader, "/earthMap.png");
  const moonMap = useLoader(THREE.TextureLoader, "moonMap.jpg");

  return (
    <main id="canvas-container" className="flex w-screen h-screen">
      <Canvas style={{ background: "black" }}>
        <group>
          {active && (
            <mesh scale={1.005}>
              <sphereGeometry args={[1.4, 64, 64]} />
              <meshBasicMaterial color="white" side={THREE.BackSide} />
            </mesh>
          )}

          {activeMoon && (
            <mesh scale={1.1} position={[5, 4, 1]}>
              <sphereGeometry args={[0.2, 32]} />
              <meshBasicMaterial color="white" side={THREE.BackSide} />
            </mesh>
          )}

          <mesh
            onPointerEnter={() => {
              setActive(true);
            }}
            onPointerLeave={() => {
              setActive(false);
            }}
            position={[0, 0, 0]}
          >
            <sphereGeometry args={[1.4, 64, 64]} />
            <meshStandardMaterial map={earthMap} color={0xffffff} />
          </mesh>

          <mesh
            onPointerEnter={() => {
              setActiveMoon(true);
            }}
            onPointerLeave={() => {
              setActiveMoon(false);
            }}
            position={[5, 4, 1]}
          >
            <sphereGeometry args={[0.2, 32]} />
            <meshStandardMaterial map={moonMap} color="white" />
          </mesh>
        </group>

        <Stars
          radius={100}
          depth={10}
          count={5000}
          factor={1}
          saturation={0}
          fade
          speed={1}
        />

        <directionalLight position={[1, 1, 1]} color="white" intensity={1.5} />
        <OrbitControls
          enableDamping={true}
          dampingFactor={0.1}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </main>
  );
}
