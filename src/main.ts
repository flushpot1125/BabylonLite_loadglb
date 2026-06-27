import {
    createEngine,
    createSceneContext,
    createArcRotateCamera,
    attachControl,
    createHemisphericLight,
    createSphere,
    createStandardMaterial,
    addToScene,
    loadGltf,
    registerScene,
    startEngine,
} from "@babylonjs/lite";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

// 1. Engine
const engine = await createEngine(canvas);

// 2. Scene
const scene = createSceneContext(engine);

const camera = createArcRotateCamera(-Math.PI / 2, Math.PI / 2.5, 3, { x: 5, y: 5, z: 5 });

scene.camera = camera;
attachControl(camera, canvas, scene);

// Light
addToScene(scene, createHemisphericLight([0, 1, 0], 10.0));

// Load 3D model and set position to (0, 0, 0)
const model = await loadGltf(engine, "./assets/dram.glb");
addToScene(scene, model);

if (scene.meshes.length > 0) {
    const rootMesh = scene.meshes[0];
    if (rootMesh?.position) {
        rootMesh.position.set(0, 0, 0);
    }
}

await registerScene(scene);

await startEngine(engine);

function animate() {
    camera.alpha += 0.005; // 回転速度（調整可能）
    requestAnimationFrame(animate);
}
animate();