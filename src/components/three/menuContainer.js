import { Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial, Center, OrbitControls } from '@react-three/drei'
import { Firstamp } from './Firstamp'
import "./menuContainer.css"
import { EffectComposer, Bloom } from '@react-three/postprocessing'


export function MenuContainer() {
  let [flag, setFlag] = useState(false)
  setTimeout(() => setFlag(true), 3000)
  let [envFlag, setenvFlag] = useState(false)
  let [threshold, setThreshold] =useState(0.35)
  let [directIntensity,setDirectIntensity] =useState(2)
  // const directIntensity = useAppSelector((state) => state.main.directIntensity)
  

  const OnClickRoute = () => {
    setTimeout(() => {
      setDirectIntensity(0.15)
      setThreshold(0.001)
      setenvFlag(true)},300)
  }



  return (
    <div id={flag === false ? "menu-container" : null} className='canvas-container'>
      <h1 id ="menu-h1" onClick={() => {OnClickRoute()}}>Enter</h1>
      <Canvas dpr={window.decivePixelRatio} shadows camera={{ position: [0,0,5], fov: 35 }} gl={{ alpha: false }}  id={'menu-canvas'}>
        <OrbitControls enable/>
      {/* <fog attach="fog" args={['#17171b', 30, 40]} />
      <color attach="background" args={['#17171b']} /> */}
      {/* <ambientLight intensity={0.25} /> */}
        <directionalLight castShadow intensity={directIntensity} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}> 
        </directionalLight>
      <Suspense fallback={null}>
          <Center onCentered={({ container, height }) => container.scale.setScalar(3)}>
            <Firstamp position={[-1.8,1.36,0]} />
          </Center>
        <mesh position={[0, -0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[500, 500]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={2024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="rgb(25,25,25)"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        {envFlag === false ? <Environment preset="dawn" /> : null}
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={threshold} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
    
    </div>
    
  )
}