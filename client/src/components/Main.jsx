import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import * as THREE from 'three';
import { useEffect } from 'react';
export default function Main() {
  const mountRef = useRef(null);
  const [photo, setPhoto] = React.useState(false);
useEffect(() => {
  if (!mountRef.current || mountRef.current.children.length > 0) return;

  const scene = new THREE.Scene();
  scene.background = null;
  

  const width = mountRef.current.clientWidth;
  const height = mountRef.current.clientHeight;

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 5).normalize();
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(0, 0, -5).normalize();
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(0, 5,0).normalize();
scene.add(directionalLight3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight4.position.set(0, -5, 0).normalize();
scene.add(directionalLight4);

const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight5.position.set(5,0,0).normalize();
scene.add(directionalLight5);

const directionalLight6 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight6.position.set(-5, 0, 0).normalize();
scene.add(directionalLight6);


  const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 0); // цвет любой, НО альфа = 0

  renderer.setSize(width, height);
  mountRef.current.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 2;


  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true;
controls.dampingFactor = 1;
controls.screenSpacePanning = false;
controls.minDistance = 2;
controls.maxDistance = 7;

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

let model = null
const loader = new GLTFLoader();
loader.load(
  '/star.glb', // путь от public/
  (glb) => {
     model = glb.scene;
    model.scale.set(1, 1, 1);
    model.position.set(0, 0, 0);

    scene.add(model);
    console.log('Model loaded!');
  },
  (xhr) => {
    if (xhr.total) {
      console.log(((xhr.loaded / xhr.total) * 100).toFixed(2) + '% loaded');
    } else {
      console.log('Loading…');
    }
  },
  (error) => {
    console.error('An error occurred', error);
  }
);


  function animate() {
    requestAnimationFrame(animate);
    if (model) {
      model.rotation.y += 0.01;  // <-- ВОТ ТУТ ВРАЩЕНИЕ!
      model.rotation.x += 0.01;  // <-- ВОТ ТУТ ВРАЩЕНИЕ!
      
    }
    
    
    controls.update();
    // renderer.setClearColor('lightgrey');
    renderer.render(scene, camera);
  }
  animate();

  return () => {
    renderer.dispose()
    console.log('Removed')
  };
}, []);


  
  return (
<div className='flex flex-col lg:flex-row justify-between mt-[160px] gap-10' id='main'>
<div className='w-full lg:w-1/2'>
<h1
className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-white font-monserrat cursor-pointer hover:opacity-50'
onMouseEnter={() => setPhoto(true)}
onMouseLeave={() => setPhoto(false)}
>
Oleg<br/>Kostov
</h1>


{photo && (
<img src='/me.jpg' alt='' className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full mt-5 object-cover'/>
)}


<p className='text-xl sm:text-2xl md:text-3xl text-white mt-6 mb-10'>Fullstack web developer</p>


<div className='flex flex-wrap gap-3 w-full'>
<div className='inline-flex text-white bg-primary px-4 py-1 rounded-xl text-lg'>Web development</div>
<div className='inline-flex text-white bg-primary px-4 py-1 rounded-xl text-lg'>Fullstack</div>
<div className='inline-flex text-white bg-primary px-4 py-1 rounded-xl text-lg'>CRUD Applications</div>
<div className='inline-flex text-white bg-primary px-4 py-1 rounded-xl text-lg'>MERN</div>
</div>
</div>


<div className='w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] relative -top-0' ref={mountRef}></div>
</div>
  )
}
