const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup(){
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  var options_ball={
    restitution:0.8
  }
  ball=Bodies.circle(400,200,20,options_ball);
  World.add(world,ball);
}

function draw(){
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}