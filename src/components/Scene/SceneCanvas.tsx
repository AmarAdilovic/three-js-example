import React from 'react'
import { Canvas } from '@react-three/fiber'

import { Cube } from './Cube'

export const SceneCanvas: React.FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Cube props={{ position: [-3.6, 0, 0] }} />
            <Cube props={{ position: [-1.2, 0, 0] }} />
            <Cube props={{ position: [1.2, 0, 0] }} />
            <Cube props={{ position: [3.6, 0, 0] }} />
        </Canvas>
    )
}