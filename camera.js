class Camera {
    constructor() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 5);
    }

    follow(object) {
        const target = object.airCraft;
        this.camera.position.set(target.position.x, target.position.y, target.position.z + 5);
    }
}