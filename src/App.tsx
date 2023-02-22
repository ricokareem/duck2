import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

const App = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
);

export default App;
