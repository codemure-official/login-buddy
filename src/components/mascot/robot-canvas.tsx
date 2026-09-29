"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { resolveMascotMode } from "@/lib/mascot-state";
import { useInteractionStore } from "@/store/interaction-store";

const damp = THREE.MathUtils.damp;

export function RobotCanvas() {
  return (
    <div className="robot-canvas">
      <Canvas
        dpr={[1, 1.65]}
        camera={{ position: [0, 0.45, 6.5], fov: 39 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        fallback={<span>Interactive mascot unavailable</span>}
      >
        <ambientLight intensity={0.72} color="#c7d2fe" />
        <directionalLight position={[-3, 5, 5]} intensity={2.8} color="#ffffff" />
        <pointLight position={[3, 1.5, 3]} intensity={12} distance={8} color="#7467ff" />
        <pointLight position={[-3, 0, 2]} intensity={8} distance={7} color="#42c8ff" />
        <pointLight position={[0, -2, 3]} intensity={4} distance={5} color="#86b8ff" />
        <Robot />
        <ContactShadows position={[0, -2.08, 0]} opacity={0.38} scale={5} blur={2.6} far={3.3} color="#111a62" />
      </Canvas>
    </div>
  );
}

function Robot() {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const leftEye = useRef<THREE.Group>(null);
  const rightEye = useRef<THREE.Group>(null);
  const leftPupil = useRef<THREE.Mesh>(null);
  const rightPupil = useRef<THREE.Mesh>(null);
  const emblem = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const typingAt = useRef(0);
  const previousTypingPulse = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const focus = useInteractionStore((state) => state.focus);
  const authStatus = useInteractionStore((state) => state.authStatus);
  const passwordVisible = useInteractionStore((state) => state.passwordVisible);
  const typingPulse = useInteractionStore((state) => state.typingPulse);
  const mode = resolveMascotMode(authStatus, focus, passwordVisible);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      media.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  useEffect(() => {
    if (typingPulse !== previousTypingPulse.current) {
      previousTypingPulse.current = typingPulse;
      typingAt.current = performance.now();
    }
  }, [typingPulse]);

  useFrame(({ clock }, delta) => {
    if (!root.current || !head.current || !leftArm.current || !rightArm.current || !leftEye.current || !rightEye.current) return;
    const currentMode = mode;
    const reduce = reducedMotion;
    leftEye.current.visible = currentMode !== "passwordHidden" && currentMode !== "passwordVisible" && currentMode !== "success";
    rightEye.current.visible = currentMode !== "passwordHidden" && currentMode !== "success";
    const t = clock.getElapsedTime();
    const speed = reduce ? 10 : 5.5;
    let headX = 0;
    let headY = 0;
    let headZ = 0;
    let rootY = reduce ? 0 : Math.sin(t * 1.35) * 0.035;
    let rootZ = 0;
    let leftZ = -0.1;
    let rightZ = 0.1;
    const leftArmY = -0.22;
    const rightArmY = -0.22;
    const armDepth = 0.42;
    let eyeY = 1;
    let leftEyeX = 1;
    let rightEyeX = 1;
    let eyeLeftRotation = 0;
    let eyeRightRotation = 0;
    let pupilX = 0;
    let pupilY = 0;
    let emblemGlow = 1.7;

    if (currentMode === "idle") {
      headY = pointer.current.x * 0.2;
      headX = -pointer.current.y * 0.11;
      pupilX = pointer.current.x * 0.1;
      pupilY = pointer.current.y * 0.07;
      if (!reduce && Math.sin(t * 0.57) > 0.996) eyeY = 0.07;
    } else if (currentMode === "emailFocused") {
      headY = 0.26;
      headX = -0.035;
      pupilX = 0.1;
      const typedRecently = performance.now() - typingAt.current < 170;
      rootY += typedRecently && !reduce ? 0.045 : 0;
    } else if (currentMode === "passwordHidden") {
      headY = 0.2;
      headX = 0.08;
      eyeY = 0.06;
      leftEyeX = 0.001;
      rightEyeX = 0.001;
      leftZ = 2.8;
      rightZ = -2.8;
    } else if (currentMode === "passwordVisible") {
      headY = 0.14;
      headZ = -0.09;
      eyeY = 0.9;
      leftEyeX = 0.001;
      pupilX = 0.12;
      leftZ = 2.8;
      leftEye.current.scale.y = damp(leftEye.current.scale.y, 0.06, speed, delta);
    } else if (currentMode === "validationError") {
      headY = 0.12 + (reduce ? 0 : Math.sin(t * 17) * 0.055);
      headZ = -0.12;
      eyeLeftRotation = 0.14;
      eyeRightRotation = -0.17;
      leftEye.current.scale.y = damp(leftEye.current.scale.y, 0.65, speed, delta);
      rightEye.current.scale.y = damp(rightEye.current.scale.y, 0.92, speed, delta);
    } else if (currentMode === "submitting") {
      headY = 0.28;
      headX = -0.12;
      rootZ = 0.08;
      pupilX = 0.08;
      eyeY = 0.75 + Math.sin(t * 4) * 0.18;
      emblemGlow = 3 + Math.sin(t * 4) * 0.8;
    } else if (currentMode === "success") {
      rootY += reduce ? 0 : Math.sin(t * 4.5) * 0.09;
      headZ = -0.08;
      leftZ = -2.72;
      rightZ = 2.72;
      emblemGlow = 5;
    }

    root.current.position.y = damp(root.current.position.y, rootY, speed, delta);
    root.current.position.z = damp(root.current.position.z, rootZ, speed, delta);
    head.current.rotation.x = damp(head.current.rotation.x, headX, speed, delta);
    head.current.rotation.y = damp(head.current.rotation.y, headY, speed, delta);
    head.current.rotation.z = damp(head.current.rotation.z, headZ, speed, delta);
    const armPoseSpeed = speed * 0.82;
    leftArm.current.rotation.z = damp(leftArm.current.rotation.z, leftZ, armPoseSpeed, delta);
    rightArm.current.rotation.z = damp(rightArm.current.rotation.z, rightZ, armPoseSpeed, delta);
    leftArm.current.position.y = damp(leftArm.current.position.y, leftArmY, armPoseSpeed, delta);
    rightArm.current.position.y = damp(rightArm.current.position.y, rightArmY, armPoseSpeed, delta);
    leftArm.current.position.z = damp(leftArm.current.position.z, armDepth, speed, delta);
    rightArm.current.position.z = damp(rightArm.current.position.z, armDepth, speed, delta);
    if (currentMode !== "passwordVisible" && currentMode !== "validationError") {
      leftEye.current.scale.y = damp(leftEye.current.scale.y, eyeY, 11, delta);
    }
    if (currentMode !== "validationError") rightEye.current.scale.y = damp(rightEye.current.scale.y, eyeY, 11, delta);
    leftEye.current.scale.x = damp(leftEye.current.scale.x, leftEyeX, 11, delta);
    rightEye.current.scale.x = damp(rightEye.current.scale.x, rightEyeX, 11, delta);
    leftEye.current.rotation.z = damp(leftEye.current.rotation.z, eyeLeftRotation, speed, delta);
    rightEye.current.rotation.z = damp(rightEye.current.rotation.z, eyeRightRotation, speed, delta);
    if (leftPupil.current && rightPupil.current) {
      leftPupil.current.position.x = damp(leftPupil.current.position.x, pupilX, speed, delta);
      rightPupil.current.position.x = damp(rightPupil.current.position.x, pupilX, speed, delta);
      leftPupil.current.position.y = damp(leftPupil.current.position.y, pupilY, speed, delta);
      rightPupil.current.position.y = damp(rightPupil.current.position.y, pupilY, speed, delta);
    }
    const material = emblem.current?.material;
    if (material instanceof THREE.MeshStandardMaterial) material.emissiveIntensity = damp(material.emissiveIntensity, emblemGlow, speed, delta);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.025} floatIntensity={0.08} enabled={!reducedMotion}>
      <group ref={root} scale={0.92} position={[0, 0, 0]}>
        <RobotBody emblem={emblem} />
        <RobotHead
          head={head}
          leftEye={leftEye}
          rightEye={rightEye}
          leftPupil={leftPupil}
          rightPupil={rightPupil}
          happy={mode === "success"}
        />
        <RobotArm side="left" armRef={leftArm} />
        <RobotArm side="right" armRef={rightArm} />
      </group>
    </Float>
  );
}

function RobotArm({ side, armRef }: {
  side: "left" | "right";
  armRef: React.RefObject<THREE.Group | null>;
}) {
  const direction = side === "left" ? -1 : 1;
  return (
    <group
      ref={armRef}
      position={[direction * 0.94, -0.22, 0.42]}
      rotation={[0, 0, direction * 0.1]}
    >
      <mesh position={[0, 0, 0]} scale={[0.23, 0.23, 0.2]} renderOrder={9}>
        <sphereGeometry args={[1, 24, 20]} />
        <meshStandardMaterial depthTest={false} depthWrite={false} color="#252d65" metalness={0.68} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.53, 0]} renderOrder={10}>
        <capsuleGeometry args={[0.18, 0.72, 10, 24]} />
        <meshPhysicalMaterial depthTest={false} depthWrite={false} color="#edf1ff" roughness={0.16} metalness={0.08} clearcoat={0.9} clearcoatRoughness={0.12} />
      </mesh>
      <group position={[0, -1.27, 0.06]}>
        <mesh scale={[1, 1, 0.82]} renderOrder={11}>
          <capsuleGeometry args={[0.27, 0.14, 10, 28]} />
          <meshPhysicalMaterial depthTest={false} depthWrite={false} color="#f5f7ff" roughness={0.14} metalness={0.06} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
        <mesh position={[direction * -0.22, 0.06, 0.015]} rotation={[0, 0, direction * 0.48]} scale={[0.14, 0.19, 0.14]} renderOrder={12}>
          <sphereGeometry args={[1, 22, 18]} />
          <meshPhysicalMaterial depthTest={false} depthWrite={false} color="#eef2ff" roughness={0.16} metalness={0.06} clearcoat={0.9} />
        </mesh>
      </group>
      <mesh position={[0, -1.03, 0.01]} renderOrder={12}>
        <cylinderGeometry args={[0.215, 0.205, 0.12, 28]} />
        <meshStandardMaterial depthTest={false} depthWrite={false} color="#333d85" metalness={0.6} roughness={0.22} />
      </mesh>
    </group>
  );
}

function RobotHead({
  head,
  leftEye,
  rightEye,
  leftPupil,
  rightPupil,
  happy,
}: {
  head: React.RefObject<THREE.Group | null>;
  leftEye: React.RefObject<THREE.Group | null>;
  rightEye: React.RefObject<THREE.Group | null>;
  leftPupil: React.RefObject<THREE.Mesh | null>;
  rightPupil: React.RefObject<THREE.Mesh | null>;
  happy: boolean;
}) {
  return (
    <group ref={head} position={[0, 0.88, 0.05]}>
      <RoundedBox args={[2.4, 1.72, 1.34]} radius={0.52} smoothness={8}>
        <meshPhysicalMaterial color="#eef2ff" roughness={0.15} metalness={0.1} clearcoat={1} clearcoatRoughness={0.1} />
      </RoundedBox>
      <RoundedBox args={[2.08, 1.39, 0.15]} radius={0.41} smoothness={8} position={[0, -0.015, 0.705]}>
        <meshPhysicalMaterial color="#aebaff" roughness={0.12} metalness={0.55} clearcoat={1} />
      </RoundedBox>
      <RoundedBox args={[1.96, 1.27, 0.19]} radius={0.36} smoothness={8} position={[0, -0.02, 0.79]}>
        <meshPhysicalMaterial color="#030616" roughness={0.1} metalness={0.58} clearcoat={1} clearcoatRoughness={0.08} />
      </RoundedBox>
      <EyeMesh position={[-0.5, 0.06, 0.91]} eyeRef={leftEye} pupilRef={leftPupil} />
      <EyeMesh position={[0.5, 0.06, 0.91]} eyeRef={rightEye} pupilRef={rightPupil} />
      <HappyEyeMesh position={[-0.5, 0.02, 0.93]} rotation={-0.08} visible={happy} />
      <HappyEyeMesh position={[0.5, 0.02, 0.93]} rotation={0.08} visible={happy} />
      <mesh position={[-1.24, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.22, 40]} />
        <meshPhysicalMaterial color="#293378" metalness={0.68} roughness={0.18} clearcoat={0.85} emissive="#343cf0" emissiveIntensity={0.55} />
      </mesh>
      <mesh position={[1.24, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.22, 40]} />
        <meshPhysicalMaterial color="#293378" metalness={0.68} roughness={0.18} clearcoat={0.85} emissive="#343cf0" emissiveIntensity={0.55} />
      </mesh>
      <mesh position={[0, 0.93, 0]}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial color="#95e7ff" emissive="#38bdf8" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

function HappyEyeMesh({ position, rotation, visible }: {
  position: [number, number, number];
  rotation: number;
  visible: boolean;
}) {
  return (
    <mesh position={position} rotation={[0, 0, rotation]} visible={visible}>
      <torusGeometry args={[0.23, 0.06, 12, 32, Math.PI]} />
      <meshStandardMaterial color="#a5f3fc" emissive="#536dfe" emissiveIntensity={4.5} toneMapped={false} />
    </mesh>
  );
}

function EyeMesh({ position, eyeRef, pupilRef }: {
  position: [number, number, number];
  eyeRef: React.RefObject<THREE.Group | null>;
  pupilRef: React.RefObject<THREE.Mesh | null>;
}) {
  return (
    <group ref={eyeRef} position={position}>
      <mesh scale={[0.32, 0.45, 0.09]}>
        <sphereGeometry args={[1, 28, 24]} />
        <meshStandardMaterial color="#89edff" emissive="#536dfe" emissiveIntensity={4.2} toneMapped={false} />
      </mesh>
      <mesh ref={pupilRef} position={[0, -0.09, 0.095]} scale={[0.19, 0.27, 0.04]}>
        <sphereGeometry args={[1, 20, 18]} />
        <meshBasicMaterial color="#071021" />
      </mesh>
    </group>
  );
}

function RobotBody({ emblem }: { emblem: React.RefObject<THREE.Mesh | null> }) {
  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.45);
    shape.lineTo(0.36, 0.28);
    shape.lineTo(0.3, -0.2);
    shape.quadraticCurveTo(0, -0.5, 0, -0.5);
    shape.quadraticCurveTo(-0.3, -0.2, -0.3, -0.2);
    shape.lineTo(-0.36, 0.28);
    shape.closePath();
    return shape;
  }, []);

  return (
    <group position={[0, -0.78, 0]}>
      <mesh position={[0, 1.02, 0]} scale={[0.55, 0.16, 0.48]}>
        <sphereGeometry args={[1, 28, 18]} />
        <meshPhysicalMaterial color="#20285d" metalness={0.7} roughness={0.18} clearcoat={0.9} />
      </mesh>
      <RoundedBox args={[1.82, 1.72, 1.22]} radius={0.56} smoothness={8}>
        <meshPhysicalMaterial color="#e7ecff" roughness={0.17} metalness={0.12} clearcoat={0.95} clearcoatRoughness={0.12} />
      </RoundedBox>
      <RoundedBox args={[1.48, 0.87, 0.17]} radius={0.3} smoothness={7} position={[0, 0.05, 0.67]}>
        <meshPhysicalMaterial color="#111737" metalness={0.58} roughness={0.18} clearcoat={0.9} />
      </RoundedBox>
      <mesh ref={emblem} position={[0, 0.04, 0.82]} scale={0.68}>
        <shapeGeometry args={[shieldShape]} />
        <meshStandardMaterial color="#a5f3fc" emissive="#4f46e5" emissiveIntensity={1.7} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.04, 0.835]} scale={0.36}>
        <shapeGeometry args={[shieldShape]} />
        <meshBasicMaterial color="#111638" />
      </mesh>
      <mesh position={[0, -0.95, 0]} scale={[0.62, 0.22, 0.54]}>
        <sphereGeometry args={[1, 24, 20]} />
        <meshStandardMaterial color="#293475" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}
