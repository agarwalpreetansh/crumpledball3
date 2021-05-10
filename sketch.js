
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var engine,world;
var box1;
var ground;
var paper1;
var hi;
var me;
function preload()
{
hi=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	
	me=createSprite(650,550,5,5);
	me.addAnimation("throwing",hi);
	me.scale=0.8

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ground_options={
	isStatic:true
}


	ground= Bodies.rectangle(width/2,670,width,20,ground_options);
	World.add(world,ground)


	box1=new Box(550,610,20,100)
	box2=new Box(650,650,200,20)
	box3=new Box(750,610,20,100)
	paper1=new paper(40,450,70);
	
      var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	Engine.run(engine);
 launcher=new Launcher(paper1.body,{x:100,y:100})
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine)
rect(ground.position.x,ground.position.y,1000,20);
 
  box3.display();
  box1.display();
  box2.display();
	paper1.display();
	launcher.display();
 
  drawSprites();

}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:215,y:-215});
}
}

function mouseDragged(){

	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased(){
	launcher.fly()
		}
