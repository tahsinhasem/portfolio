import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import './App.css'
import Scene from './comps/Scene';
import Loading from './comps/Loading';
import { Preload, ScrollControls } from '@react-three/drei';
import Overlay from './comps/Overlay';


function App() {

  return (
    <Canvas id="sphere-canvas-container" shadows className="snap-container">
      <Suspense fallback={<Loading/>}>
      <ScrollControls pages={5} damping={0.4} enabled={true}>
        <Scene />
        <Overlay/>
      </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default App
