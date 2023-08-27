import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import circle from './assets/images/test_circle.jpeg';

function PointSet() {

}

function AnimateCanvas() {
return (
    <Canvas>
        colorManagement={false}
        camera={{position: [100, 10, 0 ], fov:75 }}

        <PointSet/> 
    </Canvas>
)
}

function Ripple() {
    return (
        <div className='animation'>
            <AnimateCanvas/>
            </div>
    )
}

export default Ripple;