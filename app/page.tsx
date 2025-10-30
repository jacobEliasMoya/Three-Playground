"use client";
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
export default function Home() {
  const earthMap = useLoader(THREE.TextureLoader, "/earthMap.png");
  const moonMap = useLoader(THREE.TextureLoader,"moonMap.jpg")
  return (
    <main id="canvas-container" className="flex w-screen h-screen">
      <Canvas>
        <group>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1.4, 32]} />
            <meshStandardMaterial map={earthMap} color="white" />
          </mesh>

          <mesh position={[5, 4, 1]}>
            <sphereGeometry args={[.2, 32]} />
            <meshStandardMaterial map={moonMap} color="white" />
          </mesh>
        </group>
        <Stars fade />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 0]} color="white" intensity={1} />
        <pointLight position={[1, 1, 0]} color="white" />
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
