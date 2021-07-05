const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var snows =[]
var bgimg
var maxsnow=1000
var randomx,randomy

function preload(){

  bgimg=loadImage("snow3.jpg")
}


function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);

  engine=Engine.create()
  world=engine.world

  for (var i=0;i<maxsnow;i++){
    snows.push(new snow(random(0,1200),random(0,800),20))

  }
  
}

function draw() {
  background(bgimg); 
  
  Engine.update(engine)

  for (var i=0;i<maxsnow;i++ ){
    snows[i].display();
  }


  drawSprites();
}