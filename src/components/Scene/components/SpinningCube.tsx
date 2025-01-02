import React, { useRef, useState } from 'react'
import { type ThreeElements, useFrame } from '@react-three/fiber'
import * as THREE from 'three';

export const SpinningCube: React.FC<{args: ThreeElements['mesh']}> = ({ args }) => {
    // See R3F animation docs
    const myCube = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    useFrame(({}) => {
        // slightly rotate the cube every frame
        myCube.current.rotation.x += 0.005
        myCube.current.rotation.y += 0.005
    })

    return (
        /* direct equivalent to `new THREE.Mesh()` */
        /* don't need to import, all three.js objects will be treated as native JSX elements */
        <mesh
            {...args}
            ref={myCube}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {/* automatically attach to the parent */}
            {/* If we want to pass in Three.JS constructor arguments,
                use the `args` prop which always takes in an array */}

            {/* contains all the points (vertices) and fill (faces) of the cube */}
            <boxGeometry args={[2, 2, 2]}/>
            {/* adds green coloring to the geometry */}
            <meshStandardMaterial color={hovered ? 'hotpink' : 'cyan'}/>
        </mesh>
    )
}
