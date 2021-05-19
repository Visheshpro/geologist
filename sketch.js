
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,680,1200,20)
	stone1 = new Stone(100,100,100,100)
	rubber1 = new Rubber(300,100,30)
	hammer1 = new Hammer(500,100,100,30)
	iron1 = new Iron(600, 100, 70, 30)
    sand1 = new Sand(200, 100, 10)
	sand2 = new Sand(400, 100, 10)
	sand3 = new Sand(600, 100, 10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone1.display()
  ground1.display()
  rubber1.display()
  hammer1.display()
  iron1.display()
  sand1.display()
  sand2.display()
  sand3.display()

  drawSprites();
 
}



