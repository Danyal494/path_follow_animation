import { useState } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Components/Experience'
import { ScrollControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Canvas  style={{height:"100vh"}}>
   <color attach="background" args={['#ececec']} />
   <ScrollControls pages={5} damping={0.3} >
    <Experience/>
   </ScrollControls>
   </Canvas>
   </>
  )
}

export default App
