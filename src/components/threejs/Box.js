import {useRef, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'


export default function Box(props) {
  const ref = useRef()

  useEffect(() => {
    if (ref.current.name === '2') {
      ref.current.position.y = .5

    }
  })

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

    return (
      <mesh
        {...props} ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    )
  }


  //you could move an object at a speed of 10 units per second.