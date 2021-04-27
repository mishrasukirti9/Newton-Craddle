
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var paddle1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	

//roofObject=new Paddle(width/2,height/4,width/7,20);

	

//	startBobPositionX=width/2;
//	startBobPositionY=height/4+500;
//	bobObject1=new Paper(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
//	bobObject2=new Paper(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
//	bobObject3=new Paper(startBobPositionX,startBobPositionY,bobDiameter);
//	bobObject4=new Paper(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
//	bobObject5=new Paper(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	



//rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

//	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
//	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
//	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
//	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)


	paddle1 = new Paddle(300,200,300,10);

	circle1 = new Paper(300,400,40);
	circle2 = new Paper(260,400,40);
	circle3 = new Paper(220,400,40);
	circle4 = new Paper(380,400,40);
	circle5 = new Paper(340,400,40);

	Engine.run(engine);
  
	rope1=new Rope(circle1.body,paddle1.body,0,0);
	rope2=new Rope(circle2.body,paddle1.body,-bobDiameter*1,0);
	rope3=new Rope(circle3.body,paddle1.body,-bobDiameter*2,0);
	rope4=new Rope(circle4.body,paddle1.body,bobDiameter*2,0);
	rope5=new Rope(circle5.body,paddle1.body,bobDiameter*1,0);
	
}


function draw() {
  
  background("yellow");
 // roofObject.display();
 // bobObject5.display();
 // bobObject4.display();
 // bobObject3.display();
 // bobObject2.display();
//  bobObject1.display();
circle1.display();
circle2.display();
circle3.display();
circle4.display();
circle5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  paddle1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(circle4.body,circle4.body.position,{x:20,y:0})
	}
}

