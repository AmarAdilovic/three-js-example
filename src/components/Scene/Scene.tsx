import * as THREE from 'three';

const scene = new THREE.Scene();
// There are a few different cameras in three.js (defaulting to PerspectiveCamera)
// 75 == FOV (degrees) = extent of the scene that is seen on the display at any given moment
// window.innerWidth / window.innerHeight == Aspect Ratio = almost always use width divided by height otherwise the image will be squished
// 0.1 == near = objects closer than this value won't be rendered (can be optimized for performance)
// 1000 == far = objects further away than this value won't be rendered (can be optimized for performance)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );