
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var rope1;

var ball1;

var holder;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	holder1=new Holder(420,200,60)

	ball1=new Ball(300,400,60)
	ball2=new Ball(360,400,60)
	ball3=new Ball(420,400,60)
	ball4=new Ball(480,400,60)
	ball5=new Ball(540,400,60)

    rope1=new Rope(ball1.body,holder1.body,-120)
    rope2=new Rope(ball2.body,holder1.body,-60)
    rope3=new Rope(ball3.body,holder1.body,0)
    rope4=new Rope(ball4.body,holder1.body,60)
    rope5=new Rope(ball5.body,holder1.body,120)
	//Create the Bodies Here.

	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);

  //console.log(ball1)
  
	holder1.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.body, {x: mouseX ,y: mouseY});
    //}
}
