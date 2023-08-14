
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import Box from './components/threejs/Box'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 2] }}>
      <Box position={[-0.1, 0, 0]} name="A"/>
      {/* <Box position={[0.75, 0, 0]} name="B"/> */}
    </Canvas>
  )
}

