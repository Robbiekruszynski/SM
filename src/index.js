
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
// import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Canvas camera={{ position: [0, 0, 2] }}>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    </Canvas>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
