
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Threejs from "./Three"
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box />
    </Canvas>
  )
}


