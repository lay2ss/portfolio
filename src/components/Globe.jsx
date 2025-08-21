import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useRef } from 'react';

const logos = [
  { name: 'Three.js', src: '/logos/threejs.png' },
  { name: 'JavaScript', src: '/logos/js.png' },
  { name: 'React', src: '/logos/react.png' },
  { name: 'Tailwind', src: '/logos/tailwindcss.png' },
  { name: 'Next.js', src: '/logos/nextjs.png' },
  { name: 'HTML', src: '/logos/html5.png' },
  { name: 'TypeScript', src: '/logos/typescript.png' },
  { name: 'Git', src: '/logos/git.png' },
  { name: 'Node.js', src: '/logos/nodejs.png' },
  { name: 'CSS', src: '/logos/css3.png' },
]

const radius = 5
const logoPositions = logos.map((logo, i) => {
  const phi = Math.acos(-1 + (2 * i) / logos.length)
  const theta = Math.sqrt(logos.length * Math.PI) * phi
  const x = radius * Math.cos(theta) * Math.sin(phi)
  const y = radius * Math.sin(theta) * Math.sin(phi)
  const z = radius * Math.cos(phi)
  return { ...logo, position: [x, y, z] }
})

function LogoPlane({ src, position }) {
  const texture = useTexture(src)
  const meshRef = useRef()

  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.lookAt(camera.position) 
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  )
}

function RotatingLogos() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {logoPositions.map(({ src, position }, i) => (
        <LogoPlane key={i} src={src} position={position} />
      ))}
    </group>
  )
}

function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 6}
      />
      <RotatingLogos />
    </Canvas>
  )
}

export default Globe