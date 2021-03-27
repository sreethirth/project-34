
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Ground(290, 200, 450, 30)
	bob1 = new Bob(200, 500, 20)
	bob2 = new Bob(240, 500, 20)
	bob3 = new Bob(280, 500, 20)
	bob4 = new Bob(320, 500, 20)
	bob5 = new Bob(360, 500, 20)
	bob6 = new Bob(400, 500, 20)
	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);
	rope6 = new Rope(bob6.body, roof.body, 150, 0);

}


function draw() {
	rectMode(CENTER);
	background('#ffefa1');

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob6.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	rope6.display();


	text(mouseX + "," + mouseY, 50, 50)
	drawSprites();

}
function mouseDragged()
{

Matter.Body.setPosition(bob1.body,{x:mouseX , y:mouseY});

}


