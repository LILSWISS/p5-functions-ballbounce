var x = 320;
var y = 300;
var speedx = 10;
var speedy = 23;


function setup(){
    createCanvas(300,600)
}

function draw(){
    background(8);

    //display ball
    stroke(321);
    strokeWeight(6);
    fill(34,250,55);
    ellipse(x,y, 55, 50);

    
    //make ball move
    y = y + speedy;
    x = x + speedx;
    
    //ball changes direction when it hits wall
    if(x>600 || x<3){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
}
