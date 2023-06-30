import { useState } from "react";

export default function Target() {
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
