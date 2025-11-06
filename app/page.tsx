"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import Scene from "./components/Scene";

export default function Home() {


  return (
    <main id="canvas-container" className="flex w-screen h-screen">
      <Scene/>
    </main>
  );
}
