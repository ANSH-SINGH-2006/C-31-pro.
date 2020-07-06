var ground;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
//var rand=random(100,700);
var divisionHeight=300;

function preLoad(){}


function setup(){
  var canvas = createCanvas(490,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600,height,1200,20)
  
  frameRate(200)
  

}

function draw() {
  background(0); 
  Engine.update(engine); 
  
  
  ground.display();

  for (var k=0; k<=width;k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
    divisions.debug=false;
  }
  for(var i=0;i<divisions.length;i++){

    divisions[i].display();
  }

  for (var j=40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,70,20));
    
  }
  for(var x=0;x<plinkos.length;x++){

    plinkos[x].display();
  }

  for (var w=70; w<=width;w=w+50){
    plinkos.push(new Plinko(w,130,20));
    
  }

  for(var e=0;e<plinkos.length;e++){

    plinkos[e].display();
  }

  for (var r=40; r<=width;r=r+50){
    plinkos.push(new Plinko(r,190,20));
    
  }

  for(var c=0;c<plinkos.length;c++){

    plinkos[c].display();
  }

  for (var d=70; d<=width;d=d+50){
    plinkos.push(new Plinko(d,250,20));
    
  }

  for(var q=0;q<plinkos.length;q++){

    plinkos[q].display();
  }

  for (var n=40; n<=width;n=n+50){
    plinkos.push(new Plinko(n,310,20));
    
  }

  for(var s=0;s<plinkos.length;s++){
    plinkos[s].display();
  }

  for (var y=70; y<=width;y=y+50){
    plinkos.push(new Plinko(n,370,20));
    
  }

  for(var g=0;g<particles.length;g++){

    particles[g].display();
  }
  

  for(var h=0;h<plinkos.length;h++){

    plinkos[h].display();
  }
  
  //for (var j=15; j<=width-10;j=j+50){
    //plinkos.push(new Plinko(j,75));
    
  //}
  
  for(var i=0;i<divisions.length;i++){

    plinkos[i].display();
  }
  
  if(frameCount % 30===0){
    particles.push(new Particle(random(100,700),40,5));
  }
  
  
}
