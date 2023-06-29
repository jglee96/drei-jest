import { Canvas } from "@react-three/fiber";
import {
  View,
  Bounds,
  useGLTF,
  PerspectiveCamera,
  OrthographicCamera,
  OrbitControls,
  TransformControls,
  ContactShadows,
} from "@react-three/drei";
import { useRef, useState } from "react";

export default function App() {
  const ref = useRef<HTMLDivElement>(null!);
  const view1 = useRef<HTMLDivElement>(null!);
  const view2 = useRef<HTMLDivElement>(null!);
  return (
    <div ref={ref} className="container">
      <div className="view1" ref={view1} />
      <div className="view2" ref={view2} />
      <Canvas eventSource={ref} className="canvas">
        <View index={1} track={view1}>
          <color attach="background" args={["#f0f0f0"]} />
          <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
          <Lights />
          <Bounds fit clip observe margin={1.5}>
            <Target />
          </Bounds>
          <ContactShadows
            frames={1}
            position={[0, -1, 0]}
            blur={1}
            opacity={0.6}
          />
          <OrbitControls makeDefault />
        </View>
        <View index={2} track={view2}>
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
        </View>
      </Canvas>
    </div>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="blue" />
    </>
  );
}

function Target() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  const [hovered, hover] = useState(false);
  return (
    <group position={[0, -1, 0]} dispose={null}>
      <group
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes.Cylinder016.geometry}
          material={materials["Red.025"]}
        />
        <mesh geometry={nodes.Cylinder016_1.geometry}>
          <meshStandardMaterial color={hovered ? "orange" : "white"} />
        </mesh>
      </group>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        geometry={nodes.Cylinder016_2.geometry}
        material={materials["BrownDark.018"]}
      />
    </group>
  );
}
