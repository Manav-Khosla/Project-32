
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(800, 650, 1400, 20);
  ground2 = new Ground(600, 400, 600, 20);


  box5 = new Box(400, 340, 50, 50);
  box6 = new Box(450, 340, 50, 50)
  box7 = new Box(500, 340, 50, 50);
  box8 = new Box(550, 340, 50, 50);
  box9 = new Box(600, 340, 50, 50);
  box10 = new Box(650, 340, 50, 50);
  box11 = new Box(700, 340, 50, 50);
  box12 = new Box(750, 340, 50, 50);
  box13 = new Box(800, 340, 50, 50);
  box14 = new Box(850, 340, 50 ,50);

  box15 = new Box(450, 310, 50, 50);
  box16 = new Box(500, 310, 50, 50);
  box17 = new Box(550, 310, 50, 50);
  box18 = new Box(600, 310, 50, 50);
  box19 = new Box(650, 310, 50, 50);
  box20 = new Box(700, 310, 50, 50);
  box21 = new Box(750, 310, 50, 50);
  box22 = new Box(800, 310, 50, 50);

  box24 = new Box(550, 260, 50, 50);
  box25 = new Box(600, 260, 50, 50);
  box26 = new Box(650, 260, 50, 50);
  box27 = new Box(700, 260, 50, 50);

  box28 = new Box(600, 220, 50, 50);
  box29 = new Box(650, 220, 50, 50);
  box30 = new Box(700, 180, 50, 50);
  box31 = new Box(750, 180, 50, 50);

  polygon = new Polygon( 100, 200, 30);

  slingshot = new SlingShot(polygon.body, {x: 175, y:100});

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(255);

  textSize(24);
  text("SCORE: " + score, 750, 40);

  ground.display();
  ground2.display();


  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();

  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();

  box22.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();

  box22.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();

  box28.score();
  box29.score();
  box30.score();
  box31.score();

  polygon.display();

  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}
