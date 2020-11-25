const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var ball1,ball2,ball3,ball4, slingShot;
var chain02,chain03,chain04;

function preload() {
    backgroundImg = loadImage("sprites/back.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    box5 = new Box(610,160,400,20);
    

    ball1 = new SteelBall(640,200,33,33);
    ball2 = new SteelBall(570,200,33,33);
    ball3 = new SteelBall(500,200,33,33);
    ball4 = new SteelBall(710,200,33,33);

  
    chain = new Chain(ball1.body,box5.body,0,30);

    chain02 = new chain2(ball2.body,box5.body,0,50);

    chain03 = new chain3(ball3.body,box5.body,-85,34);

    chain04 = new chain4(ball4.body,box5.body,45,-10);

    keyPressed();
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   

    box5.display();
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

    chain.display();    
    chain02.display();
    chain03.display();
    chain04.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-85,y:-105});
		}
}