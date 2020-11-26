class paper{
    constructor(x,y){
        var opt={
            isStatic: false,
            restitution: 1.3,
            friction:0.5,
            density:1.2
        }


    
    this.body=Matter.Bodies.circle(x,y,10,opt);
    

        World.add(world,this.body);
    }
display(){
    
    push();
    fill("red");
    ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,30,30);
pop();
}

};