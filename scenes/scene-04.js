
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshLambertMaterial({ color: 0x000000 })
);

cube.position.x = 1;
cube.position.y = 1;
cube.castShadow = true;
scene.add(cube);

const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(10, 10),
  new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide })
)
// floor.position.y = 0.01;
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

const sun = new THREE.DirectionalLight(0xFFFFFF, 1);
sun.position.y = 4;
sun.castShadow = true;
sun.target = cube;
scene.add(sun);

x3.add(sun);
x3.add(cube);

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  })
});

