const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
 createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(390, 200, 80, 80);
  blower = new Blower(380, 360, 100, 90);
  blowerMouth = new BlowerMouth(255, 393, 150, 20)

  btn2 = createImg('click.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(blow); 

}
 
function draw() {
  background(59);
  Engine.update(engine);
  rectMode(CENTER);

  blower.show();
  ball.show();
  blowerMouth.show();
}
function blow() {
 Matter.Body.applyForce(ball.body, {x: 0,y: 0},{x: 0,y: -0.05})

}
