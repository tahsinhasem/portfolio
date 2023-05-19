import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model() {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/cyberpunk_hovercar/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} dispose={null} position={[0,0,0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.21}>
          <group name="Root">
            <group name="Cylinder" position={[5.77, -2.75, 1.02]} rotation={[0, -0.35, -1.22]} scale={0.13}>
              <mesh name="Cylinder_0" geometry={nodes.Cylinder_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder001" position={[5.97, -3.93, 1.49]} rotation={[0, -0.35, -1.22]} scale={0.13}>
              <group name="Cylinder005" position={[21.97, -12.67, -2.08]} rotation={[0, 0, -1.77]} scale={6.12}>
                <mesh name="Cylinder005_0" geometry={nodes.Cylinder005_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder005_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder005_0.morphTargetInfluences} />
              </group>
              <mesh name="Cylinder001_0" geometry={nodes.Cylinder001_0.geometry} material={materials.cdp_body} />
              <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials.gloss} />
              <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials.white_light} />
              <mesh name="Cylinder001_3" geometry={nodes.Cylinder001_3.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cylinder003" position={[4.84, -0.93, 0.8]} rotation={[0, -Math.PI / 9, 0.05]} scale={0.8}>
              <mesh name="Cylinder003_0" geometry={nodes.Cylinder003_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder003_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder003_0.morphTargetInfluences} />
            </group>
            <group name="Cylinder006" position={[2.51, -10.75, 1.39]} rotation={[-1.8, 1.15, 1.51]} scale={0.18}>
              <mesh name="Cylinder006_0" geometry={nodes.Cylinder006_0.geometry} material={materials.cdp_body} />
              <mesh name="Cylinder006_1" geometry={nodes.Cylinder006_1.geometry} material={materials.gloss} />
              <mesh name="Cylinder006_2" geometry={nodes.Cylinder006_2.geometry} material={materials.cdp_plastic} />
              <mesh name="Cylinder006_3" geometry={nodes.Cylinder006_3.geometry} material={materials.cdp_metal} />
              <mesh name="Cylinder006_4" geometry={nodes.Cylinder006_4.geometry} material={materials.white_light} />
            </group>
            <group name="car011">
              <mesh name="car011_0" geometry={nodes.car011_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cylinder012" position={[5.29, 4.29, 1.61]} rotation={[-0.87, 0, 0]}>
              <group name="Cylinder004" position={[0, 1.64, -0.55]} rotation={[0, Math.PI / 2, 0]}>
                <group name="Torus000" position={[0, 2.42, -0.03]} rotation={[-1.58, -1.55, -1.58]} scale={[1.27, 1, 1]}>
                  <mesh name="Torus000_0" geometry={nodes.Torus000_0.geometry} material={materials.cdp_plastic} />
                  <mesh name="Torus000_1" geometry={nodes.Torus000_1.geometry} material={materials.cdp_metal} />
                </group>
                <mesh name="Cylinder004_0" geometry={nodes.Cylinder004_0.geometry} material={materials.cdp_metal} />
                <mesh name="Cylinder004_1" geometry={nodes.Cylinder004_1.geometry} material={materials.white_light} />
              </group>
              <mesh name="Cylinder012_0" geometry={nodes.Cylinder012_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car014" position={[1.98, 0, 0]}>
              <mesh name="car014_0" geometry={nodes.car014_0.geometry} material={materials.cdp_metal} />
              <mesh name="car014_1" geometry={nodes.car014_1.geometry} material={materials.white_light} />
              <mesh name="car014_2" geometry={nodes.car014_2.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Plane004" position={[2.63, -10.82, 1.92]} scale={[0.91, 1.03, 1.07]}>
              <mesh name="Plane004_0" geometry={nodes.Plane004_0.geometry} material={materials.cdp_body} />
              <mesh name="Plane004_1" geometry={nodes.Plane004_1.geometry} material={materials.gloss} />
              <mesh name="Plane004_2" geometry={nodes.Plane004_2.geometry} material={materials.cdp_metal} />
              <mesh name="Plane004_3" geometry={nodes.Plane004_3.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cylinder023" position={[5.97, -3.93, 1.49]} rotation={[0, -0.35, -1.22]} scale={0.13}>
              <mesh name="Cylinder023_0" geometry={nodes.Cylinder023_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube011" position={[1.46, 14.95, 3.95]} rotation={[0.07, 0, 0]} scale={[1.01, 1.09, 1.01]}>
              <mesh name="Cube011_0" geometry={nodes.Cube011_0.geometry} material={materials.thruster} />
            </group>
            <group name="Cylinder009" position={[0, -10, 1.02]} rotation={[-0.7, 0, 0]}>
              <group name="Cylinder010" position={[0, 1.44, -0.55]} rotation={[0, 1.57, 0]}>
                <group name="Torus001" position={[0, 2.42, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[1.27, 1, 1]}>
                  <mesh name="Torus001_0" geometry={nodes.Torus001_0.geometry} material={materials.cdp_plastic} />
                  <mesh name="Torus001_1" geometry={nodes.Torus001_1.geometry} material={materials.cdp_metal} />
                </group>
                <mesh name="Cylinder010_0" geometry={nodes.Cylinder010_0.geometry} material={materials.cdp_metal} />
              </group>
              <mesh name="Cylinder009_0" geometry={nodes.Cylinder009_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cylinder011" position={[0, -7.4, 1.59]} rotation={[2.2, 0, 0]} scale={0.64}>
              <mesh name="Cylinder011_0" geometry={nodes.Cylinder011_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder011_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder011_0.morphTargetInfluences} />
            </group>
            <group name="car003">
              <mesh name="car003_0" geometry={nodes.car003_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder020" position={[0, -10, 1.02]} rotation={[-0.7, 0, 0]}>
              <mesh name="Cylinder020_0" geometry={nodes.Cylinder020_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car007" position={[-1.98, 0, 0]}>
              <mesh name="car007_0" geometry={nodes.car007_0.geometry} material={materials.cdp_metal} />
              <mesh name="car007_1" geometry={nodes.car007_1.geometry} material={materials.white_light} />
              <mesh name="car007_2" geometry={nodes.car007_2.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cylinder021" position={[-5.29, 4.29, 1.61]} rotation={[-0.87, 0, 0]}>
              <group name="Cylinder022" position={[0, 1.64, -0.53]} rotation={[Math.PI / 2, 0, 0]}>
                <group name="Torus002" position={[0.01, 0, -2.42]} rotation={[1.55, 0, -0.01]}>
                  <mesh name="Torus002_0" geometry={nodes.Torus002_0.geometry} material={materials.cdp_plastic} />
                  <mesh name="Torus002_1" geometry={nodes.Torus002_1.geometry} material={materials.cdp_metal} />
                </group>
                <mesh name="Cylinder022_0" geometry={nodes.Cylinder022_0.geometry} material={materials.cdp_metal} />
                <mesh name="Cylinder022_1" geometry={nodes.Cylinder022_1.geometry} material={materials.white_light} />
              </group>
              <mesh name="Cylinder021_0" geometry={nodes.Cylinder021_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Plane002" position={[-2.63, -10.82, 1.92]} rotation={[-Math.PI, 0, 0]}>
              <mesh name="Plane002_0" geometry={nodes.Plane002_0.geometry} material={materials.cdp_body} />
              <mesh name="Plane002_1" geometry={nodes.Plane002_1.geometry} material={materials.gloss} />
              <mesh name="Plane002_2" geometry={nodes.Plane002_2.geometry} material={materials.cdp_metal} />
              <mesh name="Plane002_3" geometry={nodes.Plane002_3.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cylinder024" position={[-2.51, -10.75, 1.39]} rotation={[1.34, 1.15, 1.51]}>
              <mesh name="Cylinder024_0" geometry={nodes.Cylinder024_0.geometry} material={materials.cdp_body} />
              <mesh name="Cylinder024_1" geometry={nodes.Cylinder024_1.geometry} material={materials.gloss} />
              <mesh name="Cylinder024_2" geometry={nodes.Cylinder024_2.geometry} material={materials.cdp_plastic} />
              <mesh name="Cylinder024_3" geometry={nodes.Cylinder024_3.geometry} material={materials.cdp_metal} />
              <mesh name="Cylinder024_4" geometry={nodes.Cylinder024_4.geometry} material={materials.white_light} />
            </group>
            <group name="Cylinder025" position={[-4.84, -0.93, 0.8]} rotation={[Math.PI, -Math.PI / 9, 0.05]}>
              <mesh name="Cylinder025_0" geometry={nodes.Cylinder025_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder025_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder025_0.morphTargetInfluences} />
            </group>
            <group name="Cylinder026" position={[-5.97, -3.93, 1.49]} rotation={[3.14, -0.35, -1.22]}>
              <group name="Cylinder027" position={[-2.88, 1.66, 0.27]} rotation={[0, 0, -1.77]}>
                <mesh name="Cylinder027_0" geometry={nodes.Cylinder027_0.geometry} material={materials.cdp_metal} morphTargetDictionary={nodes.Cylinder027_0.morphTargetDictionary} morphTargetInfluences={nodes.Cylinder027_0.morphTargetInfluences} />
              </group>
              <mesh name="Cylinder026_0" geometry={nodes.Cylinder026_0.geometry} material={materials.cdp_body} />
              <mesh name="Cylinder026_1" geometry={nodes.Cylinder026_1.geometry} material={materials.gloss} />
              <mesh name="Cylinder026_2" geometry={nodes.Cylinder026_2.geometry} material={materials.white_light} />
              <mesh name="Cylinder026_3" geometry={nodes.Cylinder026_3.geometry} material={materials.cdp_plastic} />
              <mesh name="Cylinder026_4" geometry={nodes.Cylinder026_4.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder028" position={[-5.77, -2.75, 1.02]} rotation={[3.14, -0.35, -1.22]}>
              <mesh name="Cylinder028_0" geometry={nodes.Cylinder028_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder014" position={[-4.76, 11.36, 3.66]} rotation={[-2.98, 0.09, 0.18]}>
              <mesh name="Cylinder014_0" geometry={nodes.Cylinder014_0.geometry} material={materials.cdp_metal} />
              <mesh name="Cylinder014_1" geometry={nodes.Cylinder014_1.geometry} material={materials.cdp_body} />
              <mesh name="Cylinder014_2" geometry={nodes.Cylinder014_2.geometry} material={materials.gloss} />
              <mesh name="Cylinder014_3" geometry={nodes.Cylinder014_3.geometry} material={materials.white_light} />
            </group>
            <group name="Cylinder013" position={[-3.82, 14.73, 4.7]} rotation={[3.14, 0.42, 0.23]}>
              <mesh name="Cylinder013_0" geometry={nodes.Cylinder013_0.geometry} material={materials.cdp_metal} />
              <mesh name="Cylinder013_1" geometry={nodes.Cylinder013_1.geometry} material={materials.cdp_body} />
              <mesh name="Cylinder013_2" geometry={nodes.Cylinder013_2.geometry} material={materials.gloss} />
            </group>
            <group name="Plane005">
              <mesh name="Plane005_0" geometry={nodes.Plane005_0.geometry} material={materials['Plane.005_0']} />
            </group>
            <group name="Plane007" position={[8.06, -19.92, 1.2]} scale={0}>
              <mesh name="Plane007_0" geometry={nodes.Plane007_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane008" position={[-9.16, -15.83, 1.2]} scale={0}>
              <mesh name="Plane008_0" geometry={nodes.Plane008_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane009" position={[-2.51, -25.33, -1.81]} scale={0}>
              <mesh name="Plane009_0" geometry={nodes.Plane009_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane010" position={[4.27, -20.2, 1.2]} scale={0}>
              <mesh name="Plane010_0" geometry={nodes.Plane010_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane011" position={[-4.46, -30.77, 6.36]} scale={0}>
              <mesh name="Plane011_0" geometry={nodes.Plane011_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane012" position={[-2.51, -5.96, 10.23]} scale={0}>
              <mesh name="Plane012_0" geometry={nodes.Plane012_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane013" position={[0.71, 8.7, 5.38]} scale={[0.56, 1.01, 0.56]}>
              <mesh name="Plane013_0" geometry={nodes.Plane013_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane014" position={[0.11, 8.08, 4.46]}>
              <mesh name="Plane014_0" geometry={nodes.Plane014_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane015" position={[1.49, 8.82, 4.79]} scale={[0.56, 1.01, 0.56]}>
              <mesh name="Plane015_0" geometry={nodes.Plane015_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane016" position={[-1.32, 6.89, 4.46]} scale={[0.56, 1.01, 0.56]}>
              <mesh name="Plane016_0" geometry={nodes.Plane016_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane017" position={[-0.95, 10.14, 4.46]} scale={[0.56, 1.01, 0.56]}>
              <mesh name="Plane017_0" geometry={nodes.Plane017_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane018" position={[-0.58, 6.87, 4.46]} scale={[0.56, 1.01, 0.56]}>
              <mesh name="Plane018_0" geometry={nodes.Plane018_0.geometry} material={materials.thruster} />
            </group>
            <group name="Plane019" position={[-0.58, -24.91, 7.17]} scale={0}>
              <mesh name="Plane019_0" geometry={nodes.Plane019_0.geometry} material={materials.thruster} />
            </group>
            <group name="Cube010" position={[5.64, 0.67, 3.94]} rotation={[0.06, 0.04, -0.04]} scale={[0.9, 1.77, 0.8]}>
              <mesh name="Cube010_0" geometry={nodes.Cube010_0.geometry} material={materials.white_light} />
            </group>
            <group name="Cube005" position={[1.46, 14.95, 3.95]}>
              <mesh name="Cube005_0" geometry={nodes.Cube005_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder002" position={[5.77, -2.75, 1.02]} rotation={[0, -0.35, 0.09]} scale={0.13}>
              <mesh name="Cylinder002_0" geometry={nodes.Cylinder002_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder007" position={[2.41, -10.79, 1.4]} rotation={[1.34, -1.15, -1.81]} scale={0.18}>
              <mesh name="Cylinder007_0" geometry={nodes.Cylinder007_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="car002">
              <mesh name="car002_0" geometry={nodes.car002_0.geometry} material={materials.cdp_body} />
            </group>
            <group name="car004">
              <mesh name="car004_0" geometry={nodes.car004_0.geometry} material={materials.white_light} />
            </group>
            <group name="Plane006" position={[4.64, -8.24, 0]}>
              <mesh name="Plane006_0" geometry={nodes.Plane006_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Plane001" position={[4.64, -8.24, 0]}>
              <mesh name="Plane001_0" geometry={nodes.Plane001_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Plane003" position={[4.64, -8.24, -0.15]}>
              <mesh name="Plane003_0" geometry={nodes.Plane003_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder017" position={[4.76, 11.36, 3.66]} rotation={[0.2, -0.17, 0.18]}>
              <group name="Cylinder015" rotation={[0, 0.26, 0]}>
                <mesh name="Cylinder015_0" geometry={nodes.Cylinder015_0.geometry} material={materials.cdp_metal} />
                <mesh name="Cylinder015_1" geometry={nodes.Cylinder015_1.geometry} material={materials.cdp_body} />
                <mesh name="Cylinder015_2" geometry={nodes.Cylinder015_2.geometry} material={materials.gloss} />
                <mesh name="Cylinder015_3" geometry={nodes.Cylinder015_3.geometry} material={materials.white_light} />
              </group>
              <mesh name="Cylinder017_0" geometry={nodes.Cylinder017_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder018" position={[3.82, 14.73, 4.7]} rotation={[-0.24, 0.99, 0.39]}>
              <group name="Cylinder019" rotation={[0, -0.59, 0]}>
                <mesh name="Cylinder019_0" geometry={nodes.Cylinder019_0.geometry} material={materials.cdp_metal} />
                <mesh name="Cylinder019_1" geometry={nodes.Cylinder019_1.geometry} material={materials.cdp_body} />
                <mesh name="Cylinder019_2" geometry={nodes.Cylinder019_2.geometry} material={materials.gloss} />
              </group>
              <mesh name="Cylinder018_0" geometry={nodes.Cylinder018_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube002">
              <mesh name="Cube002_0" geometry={nodes.Cube002_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cube006" position={[2.81, -6.54, 0.42]} rotation={[0, 0, -1.55]} scale={0.92}>
              <mesh name="Cube006_0" geometry={nodes.Cube006_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cube000">
              <mesh name="Cube000_0" geometry={nodes.Cube000_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube001" position={[2.81, -6.54, 0.42]} rotation={[0, 0, -1.55]} scale={0.92}>
              <mesh name="Cube001_0" geometry={nodes.Cube001_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube007" position={[1.46, 14.95, 3.95]} rotation={[0.07, 0, 0]} scale={[1.01, 1.09, 1.01]}>
              <mesh name="Cube007_0" geometry={nodes.Cube007_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="Cube008">
              <mesh name="Cube008_0" geometry={nodes.Cube008_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube009">
              <mesh name="Cube009_0" geometry={nodes.Cube009_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube013">
              <mesh name="Cube013_0" geometry={nodes.Cube013_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car">
              <mesh name="car_0" geometry={nodes.car_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car015">
              <mesh name="car015_0" geometry={nodes.car015_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cylinder016">
              <mesh name="Cylinder016_0" geometry={nodes.Cylinder016_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car016">
              <mesh name="car016_0" geometry={nodes.car016_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube003">
              <mesh name="Cube003_0" geometry={nodes.Cube003_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="car013">
              <mesh name="car013_0" geometry={nodes.car013_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Plane">
              <mesh name="Plane_0" geometry={nodes.Plane_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="Cube004">
              <mesh name="Cube004_0" geometry={nodes.Cube004_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="car017">
              <mesh name="car017_0" geometry={nodes.car017_0.geometry} material={materials.white_light} />
            </group>
            <group name="car001">
              <mesh name="car001_0" geometry={nodes.car001_0.geometry} material={materials.cdp_body} />
              <mesh name="car001_1" geometry={nodes.car001_1.geometry} material={materials.gloss} />
            </group>
            <group name="car006">
              <mesh name="car006_0" geometry={nodes.car006_0.geometry} material={materials.cdp_plastic} />
            </group>
            <group name="car018" position={[0, 6.49, 6.72]}>
              <mesh name="car018_0" geometry={nodes.car018_0.geometry} material={materials.cdp_body} />
              <mesh name="car018_1" geometry={nodes.car018_1.geometry} material={materials.gloss} />
            </group>
            <group name="car005">
              <mesh name="car005_0" geometry={nodes.car005_0.geometry} material={materials.cdp_plastic} />
              <mesh name="car005_1" geometry={nodes.car005_1.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car019">
              <mesh name="car019_0" geometry={nodes.car019_0.geometry} material={materials.cdp_body} />
              <mesh name="car019_1" geometry={nodes.car019_1.geometry} material={materials.gloss} />
            </group>
            <group name="car009">
              <mesh name="car009_0" geometry={nodes.car009_0.geometry} material={materials.cdp_metal} />
            </group>
            <group name="car008">
              <mesh name="car008_0" geometry={nodes.car008_0.geometry} material={materials.thruster} morphTargetDictionary={nodes.car008_0.morphTargetDictionary} morphTargetInfluences={nodes.car008_0.morphTargetInfluences} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/cyberpunk_hovercar/scene.gltf');
