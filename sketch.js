const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
     computerbase = new ComputerBase(1200,510,200,200);
     playerbase = new PlayerBase(300, random(450, height - 300), 200, 200);

     computer = new Computer(1200,350,50,200);
     player = new Player(280,playerbase.body.position.y - 153, 50, 180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  computerbase.display();
  playerbase.display();
  computer.display();
  player.display();

   //display Player and computerplayer


}
