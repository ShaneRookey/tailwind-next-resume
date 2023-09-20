"use client";
import Floor from "@/components/3d/Floor";
import { Icosphere } from "@/components/3d/Icosphere";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { Suspense } from "react";

function IcoScene({ ...props }) {
  const { theme } = useTheme();
  return (
    <div {...props} className="h-screen">
      <Suspense
        fallback={<div className="bg-gray-200 dark:bg-gray-900" />}
        {...props}
      >
        <Canvas
          camera={{
            position: [0, 0, 0],
            fov: 30,
          }}
        >
          <Environment preset={theme === "dark" ? "sunset" : "night"} />
          <Icosphere position={[0, 0, -1]} scale={1}></Icosphere>

          <Floor position={[0, 0, 0]} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default IcoScene;
