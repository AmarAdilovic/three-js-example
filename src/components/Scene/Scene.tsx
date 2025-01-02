import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'

import { SpinningCube } from './components/SpinningCube'
import { ReactiveText } from './components/ReactiveText'

// See Canvas docs for more info on error boundary: https://r3f.docs.pmnd.rs/api/canvas
// import { useErrorBoundary } from 'use-error-boundary'

// Three.js tips and tricks: https://discoverthreejs.com/tips-and-tricks/
export const Scene: React.FC = () => {
    const [clickMissed, setClickMissed] = useState(false)
    const [objectClickCount, setObjectClickCount] = useState(0)
    // Creating a scene docs: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
    // R3F docs: https://r3f.docs.pmnd.rs/getting-started/your-first-scene

    // const renderer = new THREE.WebGLRenderer();
    // // need to set the size at which we want the app to render at
    // // can decrease this value (i.e., height/2, width/2 - to render at quarter size) for performance optimizations
    // // can also call updateStyle = false to render at a lower resolution (at half resolution)
    // renderer.setSize( window.innerWidth, window.innerHeight );

    function handleCanvasClick (): void {
        if (!clickMissed) {
            setObjectClickCount(objectClickCount + 1)
        }
        setClickMissed(false)
    }

    return (
        /*
            The Canvas element does important setup work:
                - Sets up the Scene and Camera (no need to do this seperately)
                - Renders the scene every frame (do not need traditional render loop)
            It is responsive to fit to the parent node, so you can control it's size by changing it's parent's size
            
            There are a few different cameras in three.js (defaults to PerspectiveCamera)
            75 == FOV (degrees) = extent of the scene that is seen on the display at any given moment
            window.innerWidth / window.innerHeight == Aspect Ratio = almost always use width divided by height otherwise the image will be squished
            0.1 == near = objects closer than this value won't be rendered (can be optimized for performance)
            1000 == far = objects further away than this value won't be rendered (can be optimized for performance)
        */
       // See docs for default values: https://r3f.docs.pmnd.rs/api/canvas
        <Canvas
            camera={{ fov: 80 }}
            fallback={<div>Sorry your browser does not support WebGL!</div>}
            onPointerMissed={() => { setClickMissed(!clickMissed) }}
            onClick={handleCanvasClick}
        >
            {/* adds lighting to the scene */}
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <SpinningCube args={{ position: [3.6, 0, 0] }}/>
            <SpinningCube args={{ position: [-3.6, 0, 0] }}/>
            <ReactiveText text={'You\'ve clicked the cubes ' + objectClickCount + ' time' + (objectClickCount != 1 ? 's' : '')}/>
        </Canvas>
    )
}