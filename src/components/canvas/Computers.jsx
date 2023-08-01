import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({mobile}) => {

const computer=useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black"/>
      <pointLight intensity={3}/>
      <spotLight position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <primitive object={computer.scene}
       scale={mobile ? 0.7 : 0.75}
       position={mobile ? [0,-3,-2.2] : [-2,-3.25,-1.95]} 
       rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const Computercanvas=()=>
{

  const[Mobile,setMobile]=useState(false);

  useEffect(()=>{
    const mediaQuery=window.matchMedia(
      '(max-width:500px)');

      setMobile(mediaQuery.matches);

      const handleMediaQuery=(event)=>
      {
        setMobile(event.matches);
      }

      mediaQuery.addEventListener('change',handleMediaQuery);

      return ()=>
      {
        mediaQuery.removeEventListener('change',handleMediaQuery)
      }
    
  },[])

return(
   
  <Canvas
    frameLoop='demand'
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
  >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers mobile={Mobile}/>
      </Suspense>
        <Preload all/>
  </Canvas>
 

  )
}

export default Computercanvas