import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture 
} from '@react-three/drei'
import CanvasLoader from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        
        <meshStandardMaterial 
          color='#fff8eb' 
          polygonOffset 
          polygonOffsetFactor={-5}
          flatShading 
        />

        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal} 
        />
      </mesh>
    </Float>
  )
}


const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop="demand" 
      // shadows 
      // camera={{ position: [20, 3, 5], fov: 25 }} // most important because it's where are we looking at this model from (position + field of view)
      gl={{ preserveDrawingBuffer: true }} // to render our model porperly
    >
      {/* Suspense allow us to have a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls to allow us to move the model left and right */}
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          // polar angles to not to rotate the model all the way around, to rotate it around a specific angle around teh specific axis 
        />
          <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas