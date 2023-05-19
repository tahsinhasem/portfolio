import { Environment, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import * as THREE from "three";
import Hovercar from './Hovercar';
import Statue from './Satue';
import Car from "./Car";
import Lambo from "./Lambo";
import gsap from "gsap";
import Ground from './Ground';
import Light from './Light';


function toRad(ang){
    return Math.PI * ang / 180;
}



export default function Scene() {

    const ball = useRef(null);
    const t1 = useRef(null);
    const camRef = useRef(null);
    const timeline = useRef(null);
    var enableScrollingAnimation = false;


    const scroll = useScroll();
    
    
    useFrame( (state) => {

        

        if(!!camRef.current){
  
            camRef.current.lookAt(0,0,0);

        }
        
        
        timeline.current.seek(scroll.offset * timeline.current.duration());
        
        
    });

    
    useLayoutEffect(() => {


        function endCall() {
            enableScrollingAnimation = true;
        }

        if(!!camRef.current){

            /*
            gsap.to(camRef.current.position, {
                x: -6.3,
                y: 1.6,
                z: 6.2,
                duration: 4,
                onComplete: endCall
            });

            */


            timeline.current = gsap.timeline({paused:true});

            timeline.current.to(camRef.current.position, {
                x: -6.3,
                y: 1.6,
                z: 6.2,
                duration: 2
            });
            
            timeline.current.to(camRef.current.position, {
                x: -2.2,
                y: 0.8,
                z: -5.5,
                duration: 2
            });


            
            timeline.current.to(camRef.current.position, {
                y:1.2,
                x: 3.2,
                z: 2.4,
                duration: 2
            });

            
            timeline.current.to(camRef.current.position, {
                x: 0,
                y: 0.6,
                z: 2.6,
                duration: 2
            });

        }

    }, [camRef.current])


    return (<>


      
        <PerspectiveCamera makeDefault position={[7, 0.5, 0.4]} fov={45} ref={camRef}/>


        <Ground></Ground>
        <Lambo position={[0,-0.01,0]} castShadow/>
        <Light/>
        

        {/* Environment */}
        <Environment background>
            <mesh>
                <sphereGeometry args={[500, 6, 100]}/>
                <meshBasicMaterial side={THREE.BackSide} color="#000000"/>
            </mesh>
        </Environment>
        

        </>
    );
    
}