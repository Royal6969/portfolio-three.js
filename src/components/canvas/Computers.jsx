import { Suspense, useEffect, useState } from "react" 
import { Canvas } from "@react-three/fiber" // is just an empty canvas allowing us to place something on it
import { 
  OrbitControls, // helper to drag on that canvas
  Preload,       
  useGLTF        // most important because it's going to allow us to import 3D models
} from "@react-three/drei" 
import CanvasLoader from '../Loader'


const Computers = ({ isMobileView }) => {
  const computerGltfModel = useGLTF('./desktop_pc/scene.gltf');

  return ( // when we're creating 3D elements we have to start with <mesh> tag
    <mesh>
      {/* we have to create the light */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      
      {/* we need a point light */}
      <pointLight intensity={1} />

      {/* also the main light */}
      <spotLight position={[-20, 50, 10]} 
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* to pass the computer model */}
      <primitive 
        object={computerGltfModel.scene} 
        scale={isMobileView ? 0.7 : 0.75}
        position={isMobileView ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}


// finally to see the computer model, we need to load it into a canvas
const ComputersCanvas = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // first we want to check if we're on a mobile device
    // we get the media and check for a match with max-width
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobileView(mediaQuery.matches);

    // whenever the width changes we need to modify that
    const handleMediaQueryChange = (event) => {
      setIsMobileView(event.matches);
    }

    // now since we're in react and within the useEffect we have to add an event listener, and later we have to remove it
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // we have to close that media query listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  

  return (
    <Canvas 
      frameloop="demand" 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} // most important because it's where are we looking at this model from (position + field of view)
      gl={{ preserveDrawingBuffer: true }} // to render our model porperly
    >
      {/* Suspense allow us to have a loader while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls to allow us to move the model left and right */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // polar angles to not to rotate the model all the way around, to rotate it around a specific angle around teh specific axis 
        />
          <Computers isMobileView={isMobileView} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas