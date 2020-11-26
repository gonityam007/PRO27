class Chain{
    constructor(body1,body2,offsetX){
        this.offsetX=offsetX;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:0}
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
      push();
        var point1= this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        stroke("white");
        line(point1.x, point1.y, point2.x+this.offsetX, point2.y);
    pop();
}
}