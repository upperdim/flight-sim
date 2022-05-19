class Terrain {
    constructor(scene) {
        this.plane = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10), 
            new THREE.MeshBasicMaterial({color: 0xff00ff, side: THREE.DoubleSide})
        );
        this.plane.rotation.x -= Math.PI / 2;
        scene.add(this.plane);
    }
}
