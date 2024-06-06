import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../components/utils";
import Character from "../components/design/Character";
import { paragraph } from "../constants";

const OurStory = () => {
  useEffect(() => {
    document.title = "SyberKonsult | Our Story";
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-1 max-w-[98%] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]"
      >
        <Canvas
          camera={{
            position: [10, -7.5, -5],
          }}
          style={{ height: "100vh" }}
          className="bg-slate-900"
        >
          <OrbitControls maxDistance={20} minDistance={10} />
          <directionalLight />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <PointCircle />
        </Canvas>
        <h1
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-4xl md:text-5xl pointer-events-none
      "
        >
          Our Story
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-1 max-w-[98%] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem] p-5"
      >
        <Character paragraph={paragraph} />
        <div style={{ height: "100vh" }}></div>
      </motion.div>
    </>
  );
};

export default OurStory;

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};
