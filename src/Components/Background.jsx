import { Environment, Sphere } from '@react-three/drei';

import React from 'react';
import * as THREE from 'three';

const Background = () => {
  return (
    <>
      {/* Add an environment for realistic reflections */}
      <Environment preset="sunset" />

      {/* Create a large sphere to serve as the background */}
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
    <meshStandardMaterial color={"blue"} side={THREE.BackSide}/>
      </Sphere>
    </>
  );
};

export default Background;

