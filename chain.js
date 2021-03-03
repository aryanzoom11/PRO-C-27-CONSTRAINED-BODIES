class Chain {
    constructor(bodyA, bodyB) {
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 20,
            stiffness: 0.05
        }
        this.chain = Matter.Constraint.create(option)
        World.add(world, this.chain)
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push()
        stroke("red");
        strokeWeight(3)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop()

    }
}