/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Icosphere(props) {
  const outerRef = useRef();
  const midRef = useRef();
  const innerRef = useRef();
  const { nodes, materials } = useGLTF("/icosphere.glb");

  useFrame((_, delta) => {
    midRef.current.rotation.y += 0.5 * delta;
    outerRef.current.rotation.z += 0.25 * delta;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={midRef}
        name="Icosphere"
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        ref={innerRef}
        name="Icosphere001"
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials["Material.003"]}
        scale={0.5}
      />
      <mesh
        ref={outerRef}
        name="Icosphere002"
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/icosphere.glb");