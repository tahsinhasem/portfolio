import { Environment, MeshReflectorMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import * as THREE from "three";

function toRad(ang){
    return Math.PI * ang / 180;
}


export default function Light(){

    return(<>

        <spotLight args={["#ffffff", 0.1, 15, toRad(45), 1, 0.9]}
        position={[0, 5, 0]}
        lookAt={[0,0,0]}
        castShadow/>

        <spotLight args={["#ffffff", 0.4, 15, toRad(45), 1, 0.9]}
        position={[-7, 10, 0]}
        castShadow/>
        
     

        <spotLight args={["#660057", 0.3, 10, toRad(30), 1, 0.5]}
        position={[4.2, 3, -5]}
        castShadow/>
        
        
        <spotLight args={["#02aef7", 0.8, 8, toRad(45), 1, 0.5]}
        position={[-5.5, 2, 5]}
        castShadow/>
    
    </>);
}