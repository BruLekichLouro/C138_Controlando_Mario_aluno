img="";
noseX =0;
noseY=0;
marioX=400;
marioY = 400;

function preload(){
    img = loadImage("mario05.png");
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(750, 140);
    video= createCapture(VIDEO);
    video.position(80, 200);
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Modelo carregado!");
}
function gotPoses(results){
    if(results.length>0){
        noseX =results[0].pose.nose.x;
        noseY =results[0].pose.nose.y;
        console.log("Nose x = "+ noseX + "Nose y = "+ noseY);
    }
}
function draw(){
    background("#186db6");
    if(noseX < 400){
        marioX = marioX-1;
    }
    if(noseX>400){
        marioX = marioX+1;
    }
    if(noseY <250){
        marioY= marioY-1;
    }
    if(noseY >250){
        marioY=marioY+1
    }
    image(img, marioX, marioY, 40,70);
}
