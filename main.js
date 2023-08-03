img="";
noseX =0;
noseY=0;
marioX=400;
marioY = 400;

function preload(){
    img = loadImage("mario05.png");
}
function setup(){
    createCanvas(800, 500);
    video= createCapture(VIDEO);
    video.size(800, 500);
    
}