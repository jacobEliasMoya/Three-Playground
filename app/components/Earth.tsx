"use client";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

const Earth = () => {
  const [active, setActive] = useState<boolean>(false);
  const earthMap = useLoader(THREE.TextureLoader, "/textures/earthMap.png");

  return (
    <>
      {active && (
        <mesh scale={1.005}>
          <sphereGeometry args={[1.4, 64, 64]} />
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
    </>
  );
};

export default Earth;
