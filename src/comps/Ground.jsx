import { Environment, MeshReflectorMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import * as THREE from "three";


export default function Ground(){



    const [roughness, normal] = useLoader(THREE.TextureLoader, [
        "/textures/terrain-roughness.jpg",
        "/textures/terrain-normal.jpg"
    ])

    
    useEffect( () =>{
        [normal, roughness].forEach((t) => {
            t.wrapS = THREE.RepeatWrapping;
            t.wrapT = THREE.RepeatWrapping;
            t.repeat.set(5,5);
        })

        normal.encoding = THREE.LinearEncoding;
    }, [normal, roughness]);



    return(<>
    
    <mesh rotation={[-Math.PI/2, 0, 0]} receiveShadow castShadow>
            <planeGeometry args={[30,30]}/>
            <MeshReflectorMaterial 
            color="#555555" 
            side={THREE.FrontSide} 
            roughnessMap={roughness} 
            normalMap={normal}
            envMapIntensity={0}
            dithering={true}
            blur={[1000, 400]}
            resolution={1024}
            mirror={0}
            mixStrength={30}
            mixContrast={1}
            mixBlur={30}
            depthScale={0.01}
            minDepthThreshold={0.9}
            maxDepthThreshold={1}
            depthToBlurRatioBias={0.25}
            reflectorOffset={0.}
            roughness={0.6}/>
    </mesh>
    
    
    </>);
}