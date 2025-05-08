"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { apps } from "./data/apps";

function createAppTileTexture(title: string, summary: string, tech: string[]) {
  const width = 320;
  const height = 600;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  // Background (fully opaque, very dark grey)
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = "#111216"; // very dark grey
  ctx.fillRect(0, 0, width, height);

  // Neon edge (brighter border, not full neon)
  ctx.strokeStyle = "#00bfff";
  ctx.shadowColor = "#00bfff";
  ctx.shadowBlur = 8;
  ctx.lineWidth = 5;
  ctx.strokeRect(10, 10, width - 20, height - 20);
  ctx.shadowBlur = 0;

  // Title
  ctx.font = "bold 38px Arial, sans-serif";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.shadowColor = "#000";
  ctx.shadowBlur = 4;
  ctx.fillText(title, width / 2, 36, width - 40);
  ctx.shadowBlur = 0;

  // Summary
  ctx.font = "22px Arial, sans-serif";
  ctx.fillStyle = "#aefcff";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.shadowColor = "#000";
  ctx.shadowBlur = 3;
  ctx.fillText(summary, width / 2, 100, width - 48);
  ctx.shadowBlur = 0;

  // Tech stack
  ctx.font = "18px Arial, sans-serif";
  ctx.fillStyle = "#00bfff";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.shadowColor = "#000";
  ctx.shadowBlur = 2;
  ctx.fillText(tech.join("  •  "), width / 2, 180, width - 32);
  ctx.shadowBlur = 0;

  // View Details button
  ctx.font = "bold 22px Arial, sans-serif";
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#00bfff";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.shadowColor = "#000";
  ctx.shadowBlur = 3;
  ctx.strokeText("View Details", width / 2, height - 36);
  ctx.fillText("View Details", width / 2, height - 36);
  ctx.shadowBlur = 0;

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function Home3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let controls: any;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let raycaster: THREE.Raycaster;
    let mouse: THREE.Vector2;
    let hovered: THREE.Mesh | null = null;
    let animateId: number;
    let stars: THREE.Points;
    let starGeometry: THREE.BufferGeometry;
    let gridSize: number;
    let tileMeshes: THREE.Mesh[] = [];

    (async () => {
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );

      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color("#000000"); // black background
      scene.fog = new THREE.Fog("#000000", 18, 38); // black fog

      // Camera
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, 8, 26); // zoomed out further

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor("#000000");
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.minPolarAngle = Math.PI / 4;
      controls.maxPolarAngle = Math.PI / 2.1;
      controls.minDistance = 6;
      controls.maxDistance = 24;
      controls.target.set(0, 4, 0);

      // Lighting
      scene.add(new THREE.AmbientLight("#aefcff", 0.18));
      const dirLight = new THREE.DirectionalLight("#00bfff", 1.2);
      dirLight.position.set(10, 20, 10);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.set(1024, 1024);
      dirLight.shadow.camera.near = 1;
      dirLight.shadow.camera.far = 50;
      dirLight.shadow.camera.left = -20;
      dirLight.shadow.camera.right = 20;
      dirLight.shadow.camera.top = 20;
      dirLight.shadow.camera.bottom = -20;
      scene.add(dirLight);

      // Glowing grid floor
      gridSize = 32;
      const gridDivisions = 32;
      const gridHelper = new THREE.GridHelper(
        gridSize,
        gridDivisions,
        "#00bfff",
        "#00bfff"
      );
      (gridHelper.material as THREE.Material).opacity = 0.18;
      (gridHelper.material as THREE.Material).transparent = true;
      gridHelper.position.y = 0;
      scene.add(gridHelper);

      // Moving stars (animated particles)
      const starCount = 200;
      starGeometry = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * gridSize * 1.5;
        starPositions[i * 3 + 1] = Math.random() * 18 + 2;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * gridSize * 1.5;
        // White or blue
        const color =
          Math.random() > 0.5
            ? new THREE.Color("#ffffff")
            : new THREE.Color("#00bfff");
        starColors[i * 3] = color.r;
        starColors[i * 3 + 1] = color.g;
        starColors[i * 3 + 2] = color.b;
      }
      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(starPositions, 3)
      );
      starGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(starColors, 3)
      );
      const starMaterial = new THREE.PointsMaterial({
        size: 0.22,
        vertexColors: true,
        opacity: 0.85,
        transparent: true,
        depthWrite: false,
      });
      stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // App tiles as 3D tombstone-style cards
      const tileWidth = 2.2;
      const tileHeight = 4.2;
      const tileDepth = 0.7; // more depth
      const tilesPerRow = 6;
      const rowSpacing = 5.2;
      const colSpacing = 3.2;
      const yStart = 7;
      const xStart = -((tilesPerRow - 1) * colSpacing) / 2;
      const zFront = 12; // bring grid even further forward
      tileMeshes = [];

      apps.forEach((app, i) => {
        const row = Math.floor(i / tilesPerRow);
        const col = i % tilesPerRow;
        const x = xStart + col * colSpacing;
        const y = tileHeight / 2 + 0.01; // so it sits on the grid
        const z = zFront - row * rowSpacing;
        const geometry = new THREE.BoxGeometry(
          tileWidth,
          tileHeight,
          tileDepth
        );
        const texture = createAppTileTexture(
          app.title,
          app.description.slice(0, 120) +
            (app.description.length > 120 ? "..." : ""),
          app.tech
        );
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          color: "#fff", // do not tint the texture
          emissive: "#000000", // no blue glow
          emissiveIntensity: 0,
          metalness: 0.1,
          roughness: 0.8,
          transparent: false,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.rotation.x = -0.08; // slight backward tilt
        mesh.userData = { app };
        scene.add(mesh);
        tileMeshes.push(mesh);
      });

      // Raycaster for hover/click effect
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();
      hovered = null;

      function onPointerMove(event: MouseEvent) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
      renderer.domElement.addEventListener("pointermove", onPointerMove);

      function onPointerDown(event: MouseEvent) {
        const rect = renderer.domElement.getBoundingClientRect();
        const mx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const my = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(new THREE.Vector2(mx, my), camera);
        const intersects = raycaster.intersectObjects(tileMeshes);
        if (intersects.length > 0) {
          const mesh = intersects[0].object as THREE.Mesh;
          const app = mesh.userData.app;
          if (app && app.slug) {
            window.location.href = `/apps/${app.slug}`;
          }
        }
      }
      renderer.domElement.addEventListener("pointerdown", onPointerDown);

      // Animation loop
      function animate() {
        controls.update();
        // Animate stars (move in z, wrap around)
        const positions = starGeometry.attributes.position
          .array as Float32Array;
        for (let i = 0; i < 200; i++) {
          positions[i * 3 + 2] += 0.03; // move forward
          if (positions[i * 3 + 2] > gridSize * 1.2) {
            positions[i * 3 + 2] = -gridSize * 1.2;
          }
        }
        starGeometry.attributes.position.needsUpdate = true;
        // Hover effect
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(tileMeshes);
        if (hovered) {
          hovered.scale.set(1, 1, 1);
          hovered.position.y -= 0.18;
        }
        hovered = null;
        if (intersects.length > 0) {
          hovered = intersects[0].object as THREE.Mesh;
          hovered.scale.set(1.08, 1.08, 1.08);
          hovered.position.y += 0.18;
        }
        renderer.render(scene, camera);
        animateId = requestAnimationFrame(animate);
      }
      animate();

      // Resize
      function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener("resize", onResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", onResize);
        renderer.domElement.removeEventListener("pointermove", onPointerMove);
        renderer.domElement.removeEventListener("pointerdown", onPointerDown);
        if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
        cancelAnimationFrame(animateId);
      };
    })();

    // Cleanup fallback
    return () => {};
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full z-0" />;
}
