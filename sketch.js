
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var ground1;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground1= new ground(400,600,800,20);
	roof = new ground(400,150,400,30);
	bob1 = new paper(320,300);
	bob2 = new paper(380,300);
	bob3 = new paper(440,300);
	bob4 = new paper(500,300);
	bob5 = new paper(560,300);
	
	rope1= new Chain(bob1.body,roof.body,-100);
	rope2 = new Chain(bob2.body,roof.body,-50);
    rope3 = new Chain(bob3.body,roof.body,0);
	rope4 = new Chain(bob4.body,roof.body,50);
	rope5 = new Chain(bob5.body,roof.body,100);

	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  roof.display();
  bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 ground1.display();

  rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-5})
	}
}