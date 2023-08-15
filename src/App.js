
import './App.css';
import { Canvas } from '@react-three/fiber'
import Box from './components/threejs/Box'
// import Sphere from './components/threejs/Sphere'



export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 2] }}>
      <Box position={[-0.0, 0, 0]} name="1"/>
    </Canvas>
  )
}

