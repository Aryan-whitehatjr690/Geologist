
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,iron,plane,rubber,sand1,sand2,sand3,sand4,sand5,sand6,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(500,500,100,50);
	plane= new Plane(600,height,1200,20);
	stone= new Stone(400,400,100,100);
	rubber=new Rubber(500,400,40);
	sand1= new Sand(200,500,5);
	sand2= new Sand(220,500,5);
	sand3= new Sand(240,500,5);
	sand4= new Sand(260,500,5);
	sand5= new Sand(280,500,5);
	sand6= new Sand(300,500,5);
	iron=new Iron(150,500,150,100);
  
}


function draw() {
  
  background("lightblue");
	Engine.update(engine);
 
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
  drawSprites();
 
}





