import { Html, useProgress } from '@react-three/drei'


export default function Loading(){
    
  const {progress} = useProgress();
    
  return(<>

  
    <Html>
      <p
        style={
          {
            fontSize: 14,
            color: "#db6002",
            fontWeight: 800,
            marginTop: 0,
            marginLeft: -15
          }
        }
      >{progress.toFixed(2)}%</p>
    </Html>
  
    
    
    </>)
}