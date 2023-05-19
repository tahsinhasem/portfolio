import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(){
  const { nodes, materials } = useGLTF('/models/statue/scene.gltf');
  return (
    <group dispose={null} position={[0,-3,0]} castShadow>
      <group position={[5.43, 5.53, -0.02]} rotation={[1.43, -1.54, 2.99]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material_1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.material_2} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/statue/scene.gltf');
