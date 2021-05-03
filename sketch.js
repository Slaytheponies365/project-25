
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin;

var world;
function preload(){
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	Engine.run(engine);
	ground = new Ground(800,650,1600,10)
  box1 = new Box(925,550,10,100)
  box2 = new Box (1175,550,10,100)
  box3 = new Box (1050,600,250,10)
  garbage = new Garbage (500,500,50)
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display()
 box1.display()
 box2.display()
 box3.display()
 garbage.display()

 imageMode(CENTER)
 image(dustbin,1050,500,450,200)

}

function keyPressed() {
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(garbage.garbage,garbage.garbage.position,{x:0.3,y:-0.3})
	}
}
