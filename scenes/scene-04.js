
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshLambertMaterial({ color: 0x368ed1 })
);

cube.position.x = 1;
cube.position.y = 1;
scene.add(cube);

const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(10, 10),
  new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide })
)
// floor.position.y = 0.01;
floor.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(floor);

const shadowLight = new THREE.PointLight(0xff0000);
shadowLight.position.y = 4;
scene.add(shadowLight);

x3.add(shadowLight);

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  })
});

