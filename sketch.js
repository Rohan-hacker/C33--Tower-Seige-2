const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,IMG;
function preload(){
  polygon_img=loadImage("stone.png");
  IMG=loadImage("can.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,50);
  //block1.addImage("block1",IMG);
  console.log(block1);
  block2 = new Block(330,275,30,50);
  //block2.addImage("block2",IMG);
  block3 = new Block(360,275,30,50);
  //block3.addImage("block3",IMG);
  block4 = new Block(390,275,30,50);
  //block4.addImage("block4",IMG);
  block5 = new Block(420,275,30,50);
  //block5.addImage("block5",IMG);
  block6 = new Block(450,275,30,50);
  //block6.addImage("block6",IMG);
  block7 = new Block(480,275,30,50);
  //block7.addImage("block7",IMG);
  //level two
  block8 = new Block(330,235,30,50);
  //block8.addImage("block",IMG);
  block9 = new Block(360,235,30,50);
  //block9.addImage("block",IMG);
  block10 = new Block(390,235,30,50);
  //block10.addImage("block",IMG);
  block11 = new Block(420,235,30,50);
  //block11.addImage("block",IMG);
  block12 = new Block(450,235,30,50);
  //block12.addImage("block",IMG);
  //level three
  block13 = new Block(360,195,30,50);
  //block13.addImage("block",IMG);
  block14 = new Block(390,195,30,50);
  //block14.addImage("block",IMG);
  block15 = new Block(420,195,30,50);
  //block15.addImage("block",IMG);
  //top
  block16 = new Block(390,155,30,50);
  //block16.addImage("block",IMG);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,50);
  //blocks1.addImage("block",IMG);
  blocks2 = new Block(670,175,30,50);
  //blocks2.addImage("block",IMG);
  blocks3 = new Block(700,175,30,50);
  //blocks3.addImage("block",IMG);
  blocks4 = new Block(730,175,30,50);
  //blocks4.addImage("block",IMG);
  blocks5 = new Block(760,175,30,50);
  //blocks5.addImage("block",IMG);
  //level two
  blocks6 = new Block(670,135,30,50);
  //blocks6.addImage("block",IMG);
  blocks7 = new Block(700,135,30,50);
  //blocks7.addImage("block",IMG);
  blocks8 = new Block(730,135,30,50);
  //blocks8.addImage("block",IMG);
  //top
  blocks9 = new Block(700,95,30,50);
  //blocks9.addImage("block",IMG);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  
  //fill(56,44,44);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  //fill("grey");
  block16.display();
  //fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  //fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  //fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  strokeWeight(2);
  stroke(15);
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed()
{
  if(keyCode === 32)
  slingShot.attach(ball);
}