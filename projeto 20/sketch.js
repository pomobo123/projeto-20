
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let mundo;
var quadrado;
var retangulo;
var bola;
var chao;
var angulo=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  mundo = engine.world;

  var quadrado_propriedades = {
    restitution: 0.00,
    frictionAir:0.30
  }
  var bola_propriedades = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var quadrado_propriedades = {
    restitution: 0.00,
    frictionAir:0.05
  }

  var retangulo_propriedades = {
    restitution: 0.00,
    frictionAir:0.30
  }
   
   var chao_propriedades ={
     isStatic: true
   }
  

  chao = Bodies.rectangle(200,390,400,20,chao_propriedades);
  World.add(mundo,chao);

  retangulo = Bodies.rectangle(300,90,80,30,retangulo_propriedades);
  World.add(mundo,retangulo);

  quadrado = Bodies.rectangle(100,260,40,40,quadrado_propriedades);
  World.add(mundo,quadrado);

  bola = Bodies.circle(200,340,20,bola_propriedades);
  World.add(mundo,bola);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(bola.position.x,bola.position.y,20);
  rect(chao.position.x,chao.position.y,400,20);
  rect(retangulo.position.x,retangulo.position.y,80,30);
  rect(quadrado.position.x,quadrado.position.y,40,40);
}

