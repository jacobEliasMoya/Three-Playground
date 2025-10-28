"use client";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main
      id="canvas-container"
      className="flex w-screen h-screen flex-col items-end justify-end p-8 from-neutral-700 to-neutral-950   bg-linear-to-br"
    >
      <Canvas>
        <mesh position={[0, 0, 2]}>
          <sphereGeometry args={[1, 20, 20]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>

        <ambientLight intensity={0.1} />
        <directionalLight color="#fff" position={[0, 0, 5]} />
      </Canvas>
    </main>
  );
}
