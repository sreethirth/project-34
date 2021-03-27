class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }

        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        var poiA = this.rope.bodyA.position;
        var poiB = this.rope.bodyB.position;
        strokeWeight(3);
        line(poiA.x, poiA.y, poiB.x + this.offsetX, poiB.y + this.offsetY);


    }


}