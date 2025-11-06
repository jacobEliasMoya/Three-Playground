"use client";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

const Moon = () => {
  const [activeMoon, setActiveMoon] = useState<boolean>(false);
  const moonMap = useLoader(THREE.TextureLoader, "/textures/moonMap.jpg");

  return (
    <>
      {activeMoon && (
        <mesh scale={1.1} position={[5, 4, 1]}>
          <sphereGeometry args={[0.2, 32]} />
          <meshBasicMaterial color="white" side={THREE.BackSide} />
        </mesh>
      )}
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
    </>
  );
};

export default Moon;
