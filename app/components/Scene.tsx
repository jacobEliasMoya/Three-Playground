"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./Earth";
import Moon from "./Moon";

const Scene = () => {
  return (
    <Canvas style={{ background: "black" }}>
      <group>
        <Earth />
        <Moon />
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
  );
};

export default Scene;
