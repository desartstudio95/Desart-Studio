import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DigitalCoreCanvasProps {
  interactive?: boolean;
  intensity?: 'normal' | 'immersive' | 'compact';
  theme?: 'dark' | 'light';
}

export const DigitalCoreCanvas: React.FC<DigitalCoreCanvasProps> = ({
  interactive = true,
  intensity = 'normal',
  theme = 'light',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = intensity === 'compact' ? 14 : 11;
    camera.position.y = 1.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the entire Digital Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core: layered translucent icosahedron + glass sphere
    const isDark = theme === 'dark';
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4599FF,
      emissive: isDark ? 0x1d4ed8 : 0x0284c7,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.75, // Glass-like transparency
      ior: 1.45,
      thickness: 1.8,
      transparent: true,
      opacity: 0.85,
    });

    const coreGeo = new THREE.IcosahedronGeometry(1.8, 2);
    const centralCore = new THREE.Mesh(coreGeo, coreMaterial);
    coreGroup.add(centralCore);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.1, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerSphere);

    // 2. Concentric Digital Rings (representing Domain, Mail, Cloud, Security)
    const rings: THREE.Mesh[] = [];
    const ringRadii = [2.8, 3.7, 4.6];
    ringRadii.forEach((radius, i) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.03, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 1 ? 0x38bdf8 : 0x4599FF,
        transparent: true,
        opacity: isDark ? 0.6 : 0.45,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + (i * 0.35);
      ring.rotation.y = (i * 0.4);
      coreGroup.add(ring);
      rings.push(ring);
    });

    // 3. Orbiting Data Nodes (Domain, Security, Mail, Website, Cloud)
    const nodes: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; yOffset: number }[] = [];
    const nodeCount = 5;
    const nodeColors = [0x4599FF, 0x38bdf8, 0x60a5fa, 0x93c5fd, 0x2563eb];

    for (let i = 0; i < nodeCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.28, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i % nodeColors.length],
        roughness: 0.2,
        metalness: 0.8,
        emissive: nodeColors[i % nodeColors.length],
        emissiveIntensity: 0.4,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      coreGroup.add(nodeMesh);

      nodes.push({
        mesh: nodeMesh,
        angle: (i / nodeCount) * Math.PI * 2,
        speed: 0.008 + (i * 0.002),
        radius: 3.2 + (i * 0.4),
        yOffset: Math.sin(i * 1.5) * 0.8,
      });
    }

    // 4. Data particles cloud
    const particleCount = intensity === 'compact' ? 60 : 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 3 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x4599FF,
      size: 0.08,
      transparent: true,
      opacity: isDark ? 0.7 : 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 8, 7);
    scene.add(mainLight);

    const blueLight = new THREE.PointLight(0x4599FF, 4.0, 20);
    blueLight.position.set(-4, -2, 4);
    scene.add(blueLight);

    // Mouse Tracking for Parallax and dynamic rotation
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.7;
      targetRotationX = y * 0.5;
    };

    if (interactive) {
      window.addEventListener('mousemove', onMouseMove);
    }

    // Responsive resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation with mouse lerp
      coreGroup.rotation.y += 0.003;
      coreGroup.rotation.y += (targetRotationY - (coreGroup.rotation.y % (Math.PI * 2))) * 0.04;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.04;

      // Central core breathing
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.04;
      centralCore.scale.set(scale, scale, scale);
      centralCore.rotation.x = elapsedTime * 0.15;
      centralCore.rotation.y = elapsedTime * 0.2;

      innerSphere.rotation.y = -elapsedTime * 0.3;

      // Rotate rings on unique axes
      rings.forEach((ring, idx) => {
        ring.rotation.z = elapsedTime * (0.1 + idx * 0.05);
      });

      // Orbit nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.position.y = node.yOffset + Math.sin(elapsedTime * 2 + node.angle) * 0.3;
      });

      // Subtle particle drift
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', onMouseMove);
      }
      resizeObserver.disconnect();
      renderer.dispose();
      coreGeo.dispose();
      coreMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive, intensity, theme]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] pointer-events-none select-none flex items-center justify-center overflow-hidden"
    />
  );
};
