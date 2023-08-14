
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import Box from './components/threejs/Box'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box position={[-0.75, 0, 0]} name="1" />
      <Box position={[0.75, 0, 0]} name="2" />
    
    </Canvas>
  )
}


