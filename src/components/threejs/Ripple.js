import './App.css';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import circle from './assets/images/test_circle.jpeg';
import { Suspense } from 'react';

function Points() {
    const imgTexture = userLoader(THREE.TextureLoader, circle);
return (
    <points>
        <bufferGeometry attach ='geometry'>

        </bufferGeometry>
        <pointsMaterial attach ='material'map={imgTexture} color={0x00AAFF} size={0.5} sizeAttenuation transparent={false} alphaTest={0.5} opacity ={1.0}>

        </pointsMaterial>
    </points>
)
}

function AnimateCanvas() {
return (
    <Canvas>
        colorManagement={false}
        camera={{position: [100, 10, 0 ], fov:75 }}
        <Suspense fallback={null}>
        <Points/> 
        </Suspense>
    </Canvas>
)
}

function Ripple() {
    return (
        <div className='animation'>
            <Suspense fallback={<div>a watched pot never boils...</div>}>
            <AnimateCanvas/>
            </Suspense>
            </div>
    )
}

export default Ripple;