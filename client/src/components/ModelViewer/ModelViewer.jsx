import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styles from "./ModelViewer.module.css";
import { TbView360Number } from "react-icons/tb";

const ModelViewer = ({ avatarPath }) => {
  const mountRef = useRef(null);
  const avatarRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const width = 450;
    const height = 600;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const aspect = width / height;
    const frustumSize = 5;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    camera.position.set(0, 1.6, 2);
    camera.lookAt(0, 1.4, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.4, 0);
    controls.update();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight1.position.set(5, 10, 7.5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight2.position.set(-5, 10, 7.5);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight3.position.set(5, 10, -7.5);
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight4.position.set(-5, 10, -7.5);
    scene.add(directionalLight4);

    const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight5.position.set(0, 1, 0);
    scene.add(directionalLight5);

    const directionalLight6 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight6.position.set(0, 1.6, 2);
    scene.add(directionalLight6);

    const loadAvatar = (path) => {
      const loader = new GLTFLoader();
      loader.load(
        path,
        (gltf) => {
          const avatar = gltf.scene;
          avatar.position.set(0, -1, 0);
          avatar.scale.set(2, 2, 2);
          if (avatarRef.current) {
            scene.remove(avatarRef.current);
          }
          avatarRef.current = avatar;
          scene.add(avatar);
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    };

    if (avatarPath) {
      const modelPath = `/src/assets/TryOn/${avatarPath}`;
      loadAvatar(modelPath);
    }

    // Window Resize Handler
    const onWindowResize = () => {
      const aspect = width / height;
      const frustumSize = 5;
      camera.left = (frustumSize * aspect) / -2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, [avatarPath]);

  return (
    <div className={styles.container}>
      <div id="container" className={styles.viewer} ref={mountRef} />
      <TbView360Number className={styles.icon} />
    </div>
  );
};

export default ModelViewer;
