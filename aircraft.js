class AirCraft {
    constructor(scene, camera) {
        this.airCraft = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1), 
            new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } )
        );
        this.airCraft.position.y += 0.5;
        scene.add(this.airCraft);

        this.controls = new Controls();
        this.airCraft.add(camera.camera);

        this.F = 0.1;
    }

    update() {
        this.#move();
    }

    #move() {
        if (this.controls.forward) {
            // this.airCraft.position.z -= 0.01;
            
            // const Fy = this.F * Math.cos(this.airCraft.rotation.y);
            // const AB = this.F * Math.sin(this.airCraft.rotation.y);
            // const Fx = AB * Math.cos(this.airCraft.rotation.x);
            // const Fz = AB * Math.sin(this.airCraft.rotation.x);

            const Fx = this.F * Math.cos(this.airCraft.rotation.x);
            const Fy = this.F * Math.cos(this.airCraft.rotation.y);
            const Fz = this.F * Math.cos(this.airCraft.rotation.z);
            
            this.airCraft.position.x += Fx;
            this.airCraft.position.y += Fy;
            this.airCraft.position.z += Fz;
        }

        if (this.controls.reverse) {
            // this.airCraft.position.z += 0.01;

            // const Fy = this.F * Math.cos(this.airCraft.rotation.y);
            // const AB = this.F * Math.sin(this.airCraft.rotation.y);
            // const Fx = AB * Math.cos(this.airCraft.rotation.x);
            // const Fz = AB * Math.sin(this.airCraft.rotation.x);

            const Fx = this.F * Math.cos(this.airCraft.rotation.x);
            const Fy = this.F * Math.cos(this.airCraft.rotation.y);
            const Fz = this.F * Math.cos(this.airCraft.rotation.z);

            
            this.airCraft.position.x -= Fx;
            this.airCraft.position.y -= Fy;
            this.airCraft.position.z -= Fz;
        }

        if (this.controls.rollRight) {this.airCraft.rotation.z -= 0.01;}
        if (this.controls.rollLeft)  {this.airCraft.rotation.z += 0.01;}

        if (this.controls.pitchUp)   {this.airCraft.rotation.x += 0.01;}
        if (this.controls.pitchDown) {this.airCraft.rotation.x -= 0.01;}

        if (this.controls.turnRight) {this.airCraft.rotation.y -= 0.01;}
        if (this.controls.turnLeft)  {this.airCraft.rotation.y += 0.01;}

        // Debug purposes. Strafe right, left, up, down directly...
        if (this.controls.strafeRight) {this.airCraft.position.x += 0.01;}
        if (this.controls.strafeLeft)  {this.airCraft.position.x -= 0.01;}

        if (this.controls.strafeUp)    {this.airCraft.position.y += 0.01;}
        if (this.controls.strafeDown)  {this.airCraft.position.y -= 0.01;}
    }
}
