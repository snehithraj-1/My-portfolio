import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, RotateCw } from 'lucide-react';

export default function Hero3D() {
  const containerRef = useRef(null);
  const [wireframeMode, setWireframeMode] = useState(true);
  const [coreSpeed, setCoreSpeed] = useState(1);
  const animFrameId = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.045);

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Cyber Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      wireframe: wireframeMode,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.85
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner Dodecahedron Core
    const innerGeo = new THREE.DodecahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x8a2be2,
      wireframe: true,
      emissive: 0x8a2be2,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.9
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Orbital Ring 1
    const ringGeo1 = new THREE.RingGeometry(2.7, 2.75, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // Orbital Ring 2
    const ringGeo2 = new THREE.RingGeometry(3.1, 3.14, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Orbiting Satellites / Glowing Nodes
    const satellitesGroup = new THREE.Group();
    coreGroup.add(satellitesGroup);
    const satelliteCount = 5;
    const satellites = [];

    for (let i = 0; i < satelliteCount; i++) {
      const satGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f2fe : 0xa855f7
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satellitesGroup.add(satMesh);
      satellites.push({
        mesh: satMesh,
        radius: 2.7 + i * 0.25,
        speed: (0.8 + i * 0.2) * (i % 2 === 0 ? 1 : -1),
        offset: (i * Math.PI * 2) / satelliteCount
      });
    }

    // 2. Cosmic Nebula Particle Field
    const particleCount = 1600;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x00f2fe), // Cyan
      new THREE.Color(0x38bdf8), // Sky
      new THREE.Color(0x8a2be2), // Purple
      new THREE.Color(0xc084fc), // Violet
      new THREE.Color(0x10b981)  // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 22;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 22;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 20;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[i3] = c.r;
      particleColors[i3 + 1] = c.g;
      particleColors[i3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Particle Texture via Canvas
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(0, 242, 254, 0.7)');
      gradient.addColorStop(0.8, 'rgba(138, 43, 226, 0.2)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: createParticleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3, 20);
    cyanLight.position.set(4, 4, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8a2be2, 3.5, 20);
    purpleLight.position.set(-4, -4, 2);
    scene.add(purpleLight);

    // Mouse Tracking & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Parallax
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Rotate Cyber Core
      coreGroup.rotation.x = elapsedTime * 0.25 * coreSpeed + mouseY * 0.4;
      coreGroup.rotation.y = elapsedTime * 0.35 * coreSpeed + mouseX * 0.5;
      innerMesh.rotation.y = -elapsedTime * 0.5 * coreSpeed;
      innerMesh.rotation.z = elapsedTime * 0.3 * coreSpeed;

      // Orbit rings
      ring1.rotation.z = elapsedTime * 0.2 * coreSpeed;
      ring2.rotation.z = -elapsedTime * 0.25 * coreSpeed;

      // Satellites motion
      satellites.forEach((sat) => {
        const angle = elapsedTime * sat.speed + sat.offset;
        sat.mesh.position.x = Math.cos(angle) * sat.radius;
        sat.mesh.position.y = Math.sin(angle * 1.5) * 0.8;
        sat.mesh.position.z = Math.sin(angle) * sat.radius;
      });

      // Subtle pulse on inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Rotate particle nebula
      particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.15;
      particles.rotation.x = mouseY * 0.1;

      // Camera parallax reacting to scroll
      camera.position.x = mouseX * 1.2;
      camera.position.y = mouseY * 1.2 - (scrollY * 0.0018);
      camera.lookAt(0, -scrollY * 0.0008, 0);

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [wireframeMode, coreSpeed]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      {/* Three.js canvas container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Cyber HUD Mini Control Bar */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#070d1e]/80 border border-cyan-500/20 backdrop-blur-md text-xs font-mono text-cyan-300/80 shadow-lg">
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          WebGL 3D Core
        </span>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => setWireframeMode(!wireframeMode)}
          className="flex items-center gap-1 hover:text-cyan-200 transition-colors cursor-pointer bg-transparent border-none text-xs font-mono text-cyan-300/80"
          title="Toggle Mesh Render Mode"
        >
          {wireframeMode ? <Eye size={13} /> : <EyeOff size={13} />}
          {wireframeMode ? 'Wireframe' : 'Solid'}
        </button>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => setCoreSpeed(s => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
          className="flex items-center gap-1 hover:text-cyan-200 transition-colors cursor-pointer bg-transparent border-none text-xs font-mono text-cyan-300/80"
          title="Toggle Rotation Speed"
        >
          <RotateCw size={13} />
          {coreSpeed}x
        </button>
      </div>
    </div>
  );
}
