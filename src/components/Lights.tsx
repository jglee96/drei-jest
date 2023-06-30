export default function Lights() {
    return (
      <>
        <ambientLight intensity={1} />
        <pointLight position={[20, 30, 10]} />
        <pointLight position={[-10, -10, -10]} color="blue" />
      </>
    );
  }
  