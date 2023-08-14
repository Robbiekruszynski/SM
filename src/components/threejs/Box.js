import {useRef, useEffect} from 'react'

export default function Box(props) {
  const ref = useRef()

  useEffect(() => {
    if (ref.current.name === '2') {
      ref.current.position.y = .5

    }
  })

    return (
      <mesh
        {...props} ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    )
  }