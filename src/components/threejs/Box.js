import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 1 * delta
  })

    //you could move an object at a speed of 10 units per second.

  return (
    <mesh {...props} ref={ref}
      {...props}
      // ref={ref}
      // onPointerDown={(e) => console.log('pointer down ' + e.object.name)}
      // onPointerUp={(e) => console.log('pointer up ' + e.object.name)}
      // onPointerOver={(e) => console.log('pointer over ' + e.object.name)}
      // onPointerOut={(e) => console.log('pointer out ' + e.object.name)}
      // onUpdate={(self) => console.log(self)}

      //kind of a cool console log above
    >
      <boxGeometry />
      <meshBasicMaterial color="white" wireframe={false} />
    </mesh>
  )
}



