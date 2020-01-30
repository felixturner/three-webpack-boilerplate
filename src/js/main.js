import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

/*

	A most basic three.js scene

*/

let scene, camera, renderer, cube, controls, stats;

function init() {
	console.log('THREE v', THREE.REVISION);
	stats = new Stats();
	document.body.appendChild(stats.dom);

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 3;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	let geometry = new THREE.BoxGeometry(1, 1, 1);
	let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	controls = new OrbitControls(camera, renderer.domElement);

	//resize
	window.addEventListener('resize', onResize, false);
	onResize();
	update();
}

function update() {
	requestAnimationFrame(update);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
	stats.update();
	controls.update();
}

function onResize() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
	renderer.setSize(w, h);
	renderer.setPixelRatio(window.devicePixelRatio);
}

init();
