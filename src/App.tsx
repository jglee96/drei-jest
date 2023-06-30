import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { useRef } from "react";
import ViewOne from "./components/ViewOne";
import ViewTwo from "./components/ViewTwo";

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
          <ViewOne />
        </View>
        <View index={2} track={view2}>
          <ViewTwo />
        </View>
      </Canvas>
    </div>
  );
}
