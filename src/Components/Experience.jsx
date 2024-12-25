import {
  Environment,
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
  Text,
  useScroll,
} from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import Background from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { TextSection } from "./TextSection";
const Experience = () => {
  const LINE_NB_POINTS = 12000;
  const CURVE_DISTANCE = 250;
  const CURVE_AHEAD_CAMERA = 0.008;
  const CURVE_AHEAD_AIRPLANE = 0.02;
  const AIRPLANE_MAX_ANGLE = 35;
 

    const curvePoints = useMemo(
      () => [
        new THREE.Vector3(0, 0, 0),
              // new THREE.Vector3(0, 0, -10),
              // new THREE.Vector3(-2, 0, -20),
              // new THREE.Vector3(-3, 0, -30),
              // new THREE.Vector3(0, 0, -40),
              // new THREE.Vector3(5, 0, -50),
              // new THREE.Vector3(7, 0, -60),
              // new THREE.Vector3(5, 0, -70),
              // new THREE.Vector3(0, 0, -80),
              // new THREE.Vector3(0, 0, -90),
              // new THREE.Vector3(0, 0, -100),
              // new THREE.Vector3(0, 0, 0),
              new THREE.Vector3(0, 0, -CURVE_DISTANCE),
              new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
              new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
              new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
              new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
              new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
              new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
              // new THREE. Vector3(-60, -100, 60),
              // new THREE. Vector3(-60, 20, 60),
              // new THREE. Vector3(-60, 120, 60),
              // new  THREE.Vector3(60, 20, -60),
              // new  THREE.Vector3(60, -100, -60),
      ],
      []
    );
  
    const curve = useMemo(() => {
      return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
    }, []);

    const linePoints = useMemo(() => {
      return curve.getPoints(LINE_NB_POINTS);
    }, [curve]);
  
    const shape = useMemo(() => {
      const shape = new THREE.Shape();
      shape.moveTo(0, -0.08);
      shape.lineTo(0, 0.08);
  
      return shape;
    }, [curve]);
  
    const textSections = useMemo(() => {
      return [
        {
          cameraRailDist: -1,
          position: new THREE.Vector3(
            curvePoints[1].x - 3,
            curvePoints[1].y,
            curvePoints[1].z
          ),
          subtitle: `Welcome to danverse,
  Have a seat and enjoy the ride!`,
        },
        {
          cameraRailDist: 1.5,
          position: new THREE.Vector3(
            curvePoints[2].x + 2,
            curvePoints[2].y,
            curvePoints[2].z
          ),
          title: "Services",
          subtitle: `Do you want a drink?
  We have a wide range of beverages!`,
        },
        {
          cameraRailDist: -1,
          position: new THREE.Vector3(
            curvePoints[3].x - 3,
            curvePoints[3].y,
            curvePoints[3].z
          ),
          title: "Fear of flying?",
          subtitle: `Our flight attendants will help you have a great journey`,
        },
        {
          cameraRailDist: 1.5,
          position: new THREE.Vector3(
            curvePoints[4].x + 3.5,
            curvePoints[4].y,
            curvePoints[4].z - 12
          ),
          title: "Movies",
          subtitle: `We provide a large selection of medias, we highly recommend you Porco Rosso during the flight`,
        },
      ];
    }, []);

    const clouds = useMemo(
      () => [
        // STARTING
        {
          position: new THREE.Vector3(-3.5, -3.2, -7),
        },
        {
          position: new THREE.Vector3(3.5, -4, -10),
        },
        {
          scale: new THREE.Vector3(4, 4, 4),
          position: new THREE.Vector3(-18, 0.2, -68),
          rotation: new THREE.Euler(-Math.PI / 5, Math.PI / 6, 0),
        },
        {
          scale: new THREE.Vector3(2.5, 2.5, 2.5),
          position: new THREE.Vector3(10, -1.2, -52),
        },
        // FIRST POINT
        {
          scale: new THREE.Vector3(4, 4, 4),
          position: new THREE.Vector3(
            curvePoints[1].x + 10,
            curvePoints[1].y - 4,
            curvePoints[1].z + 64
          ),
        },
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[1].x - 20,
            curvePoints[1].y + 4,
            curvePoints[1].z + 28
          ),
          rotation: new THREE.Euler(0, Math.PI / 7, 0),
        },
        {
          rotation: new THREE.Euler(0, Math.PI / 7, Math.PI / 5),
          scale: new THREE.Vector3(5, 5, 5),
          position: new THREE.Vector3(
            curvePoints[1].x - 13,
            curvePoints[1].y + 4,
            curvePoints[1].z - 62
          ),
        },
        {
          rotation: new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
          scale: new THREE.Vector3(5, 5, 5),
          position: new THREE.Vector3(
            curvePoints[1].x + 54,
            curvePoints[1].y + 2,
            curvePoints[1].z - 82
          ),
        },
        {
          scale: new THREE.Vector3(5, 5, 5),
          position: new THREE.Vector3(
            curvePoints[1].x + 8,
            curvePoints[1].y - 14,
            curvePoints[1].z - 22
          ),
        },
        // SECOND POINT
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[2].x + 6,
            curvePoints[2].y - 7,
            curvePoints[2].z + 50
          ),
        },
        {
          scale: new THREE.Vector3(2, 2, 2),
          position: new THREE.Vector3(
            curvePoints[2].x - 2,
            curvePoints[2].y + 4,
            curvePoints[2].z - 26
          ),
        },
        {
          scale: new THREE.Vector3(4, 4, 4),
          position: new THREE.Vector3(
            curvePoints[2].x + 12,
            curvePoints[2].y + 1,
            curvePoints[2].z - 86
          ),
          rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 3),
        },
        // THIRD POINT
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[3].x + 3,
            curvePoints[3].y - 10,
            curvePoints[3].z + 50
          ),
        },
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[3].x - 10,
            curvePoints[3].y,
            curvePoints[3].z + 30
          ),
          rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
        },
        {
          scale: new THREE.Vector3(4, 4, 4),
          position: new THREE.Vector3(
            curvePoints[3].x - 20,
            curvePoints[3].y - 5,
            curvePoints[3].z - 8
          ),
          rotation: new THREE.Euler(Math.PI, 0, Math.PI / 5),
        },
        {
          scale: new THREE.Vector3(5, 5, 5),
          position: new THREE.Vector3(
            curvePoints[3].x + 0,
            curvePoints[3].y - 5,
            curvePoints[3].z - 98
          ),
          rotation: new THREE.Euler(0, Math.PI / 3, 0),
        },
        // FOURTH POINT
        {
          scale: new THREE.Vector3(2, 2, 2),
          position: new THREE.Vector3(
            curvePoints[4].x + 3,
            curvePoints[4].y - 10,
            curvePoints[4].z + 2
          ),
        },
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[4].x + 24,
            curvePoints[4].y - 6,
            curvePoints[4].z - 42
          ),
          rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
        },
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[4].x - 4,
            curvePoints[4].y + 9,
            curvePoints[4].z - 62
          ),
          rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
        },
        // FINAL
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[7].x + 12,
            curvePoints[7].y - 5,
            curvePoints[7].z + 60
          ),
          rotation: new THREE.Euler(-Math.PI / 4, -Math.PI / 6, 0),
        },
        {
          scale: new THREE.Vector3(3, 3, 3),
          position: new THREE.Vector3(
            curvePoints[7].x - 12,
            curvePoints[7].y + 5,
            curvePoints[7].z + 120
          ),
          rotation: new THREE.Euler(Math.PI / 4, Math.PI / 6, 0),
        },
        {
          scale: new THREE.Vector3(4, 4, 4),
          position: new THREE.Vector3(
            curvePoints[7].x,
            curvePoints[7].y,
            curvePoints[7].z
          ),
          rotation: new THREE.Euler(0, 0, 0),
        },
      ],
      []
    );
  

    const cameraGroup = useRef();
    const scroll = useScroll();
  

    
  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    const curPoint = curve.getPoint(scrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane rotation

    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new THREE.Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
  });



    const airplane = useRef();
  return (
    <>
      {/* <OrbitControls  /> */}
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      <Stars radius={900} depth={60} count={150000} factor={5} saturation={4}  speed={1} />

      <group ref={cameraGroup}>
        <Environment preset="night" blur={0.5} background="true"/>
        {/* <Background /> */}
        <Sky distance={450000} sunPosition={[0, -9, 0]} inclination={0} azimuth={0.25} />
        <PerspectiveCamera makeDefault position={[0, 0.6, 13]} fov={30} />
        <group ref={airplane}>
        <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
          <Airplane
            rotation-y={Math.PI / 2}
            scale={[0.2, 0.2, 0.2]}
            position-y={0}
            position-z={5}
            />
        </Float>
            </group>
      </group>

      {/* text */}

      {textSections.map((text, index) => (
  <TextSection {...text} key={index} />
))}
{/* <group position={[-4,1.5,-20]}> 

<Text
color="black"
anchorX={"left"}
anchorY={"right"}
fontSize="0.22"
maxWidth={2.5}
>
  Welcome to Aiplane {"\n"} 
  Have a seat and enjoy
</Text>
  </group>
  <group position={[1,0.8,-42]}>
    <Text color="black"
anchorX={"left"}
anchorY={"bottom"}
fontSize="0.32"
maxWidth={2.5}>Service</Text>
    <Text color="black"
anchorX={"left"}
anchorY={"top"}
fontSize="0.22"
maxWidth={2.5}>
      Do you want a drink {"\n"} 
      We have a wide range of beverages
    </Text>
  </group> */}
{/* 
      <Line
        points={linePoints}
        transparent
        linewidth={16}
        color={"black"}
        opacity={0.7}
      /> */}

   {/* LINE */}
   <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"black"}
            opacity={1}
            transparent
            envMapIntensity={2}
          />
        </mesh>
      </group>

      {clouds.map((cloud, index) => (
  <Cloud {...cloud} key={index} />
))}

{/* 
      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[2, -0.2, -4]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        position={[2, -0.2, -15]}
        rotation-y={Math.PI / 9}
      />
      <Cloud
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        position={[1, -0.2, -12]}
        rotation-y={Math.PI / 9}
      />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[1, -1, -30]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-4, -1, -20]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-3, -1, -45]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[5, 1, -54]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-2, 1, -64]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[0.6, 1, -74]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[0.6, 1, -90]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[2, 1, -100]} />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-2.5, 1, -64]} /> */}
    </>
  );
};

export default Experience;
