
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils } from "three";
import vertexShader from './components/threejs/VertexShader';
import fragmentShader from './components/threejs/FragmentShader';

const Bloby = () => {
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = .69 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      hover.current ? 1.85 : .5,
      .2
    );
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={.3}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[10, 40]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      <Bloby />
      {/* <axesHelper /> */}
      <OrbitControls />
    </Canvas>
   
  );
};

export default Scene;


//Box ref 
// import './App.css';
// import { Canvas } from '@react-three/fiber'
// import Box from './components/threejs/Box'
// // import Sphere from './components/threejs/Sphere'



// export default function App() {
//   return (
//     <Canvas camera={{ position: [0, 5, 2] }}>
//       <Box position={[-0.0, 0, 0]} name="1"/>
//     </Canvas>
//   )
// }
