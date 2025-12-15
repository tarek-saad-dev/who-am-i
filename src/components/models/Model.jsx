"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Model = React.memo(function Model(props) {
  // Use React.memo for performance optimization
  const { scene, animations } = useGLTF("/models/new.glb");
  const { actions } = useAnimations(animations, scene);
  const { viewport, size } = useThree();

  const modelRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to -1 to 1 range
      const x = (event.clientX / size.width) * 2 - 1;
      const y = -(event.clientY / size.height) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  // Play animations if available
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      console.log('Available animations:', Object.keys(actions));
      
      // Try to find common idle animation names first
      const idleNames = ['Idle', 'idle', 'IDLE', 'Idle_1', 'idle_1', 'T-Pose', 'tpose', 'Armature|Idle', 'mixamorig|Idle'];
      let played = false;
      
      for (const name of idleNames) {
        if (actions[name]) {
          console.log('Playing animation:', name);
          actions[name].setLoop(2, Infinity); // Loop forever
          actions[name].play();
          played = true;
          break;
        }
      }
      
      // If no idle animation found, play the first available animation
      if (!played && Object.keys(actions).length > 0) {
        const firstActionName = Object.keys(actions)[0];
        console.log('Playing first animation:', firstActionName);
        const firstAction = actions[firstActionName];
        if (firstAction) {
          firstAction.setLoop(2, Infinity);
          firstAction.play();
        }
      }
    } else {
      console.log('No animations found in model');
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Keep Y position fixed (no floating animation)
      modelRef.current.position.y = -2.0;

      // Smooth mouse following - calculate target rotation
      const baseYRotation = 0.5; // Base Y-axis rotation (facing slightly right)
      targetRotation.current.y = baseYRotation + mouse.x * 0.3; // Horizontal rotation (left/right) + base offset
      targetRotation.current.x = mouse.y * 0.02 + 0.25; // Vertical rotation (up/down) + base tilt

      // Smooth interpolation using lerp for natural movement
      const lerpFactor = 0.05;
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotation.current.y,
        lerpFactor
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotation.current.x,
        lerpFactor
      );
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[1.7, 1.7, 1.7]}
      rotation={[0.25, -0.8, 0]}
    >
      <primitive object={scene} />
    </group>
  );
});

export default Model;
useGLTF.preload("/models/new.glb");

