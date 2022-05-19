const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new Camera();
const airCraft = new AirCraft(scene, camera);
const terrain = new Terrain(scene);


function animate() {
    requestAnimationFrame( animate );

    airCraft.update();
    //camera.follow(airCraft);

    renderer.render( scene, camera.camera );
};

animate();
