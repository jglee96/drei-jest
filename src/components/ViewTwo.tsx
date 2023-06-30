import {
    OrbitControls,
    ContactShadows,
    OrthographicCamera,
    TransformControls,
  } from "@react-three/drei";
  import Lights from "./Lights";
  import Target from "./Target";
  
  export default function ViewTwo() {
    return (
      <>
        <color attach="background" args={["#d6edf3"]} />
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Lights />
        <OrbitControls makeDefault />
        <TransformControls>
          <group>
            <Target />
            <ContactShadows
              frames={1}
              position={[0, -1, 0]}
              blur={1}
              opacity={0.6}
            />
          </group>
        </TransformControls>
      </>
    );
  }
  