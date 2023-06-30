import {
    Bounds,
    PerspectiveCamera,
    OrbitControls,
    ContactShadows,
  } from "@react-three/drei";
  import Lights from "./Lights";
  import Target from "./Target";
  
  export default function ViewOne() {
    return (
      <>
        <color attach="background" args={["#f0f0f0"]} />
        <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
        <Lights />
        <Bounds fit clip observe margin={1.5}>
          <Target />
        </Bounds>
        <ContactShadows frames={1} position={[0, -1, 0]} blur={1} opacity={0.6} />
        <OrbitControls makeDefault />
      </>
    );
  }
  