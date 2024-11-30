import { useGLTF } from "@react-three/drei";
import React from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("./model/model.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./model/model.gltf");