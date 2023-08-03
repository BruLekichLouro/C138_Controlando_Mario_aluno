img="";
noseX =0;
noseY=0;
marioX=400;
marioY = 400;

function preload(){
    img = loadImage("mario05.png");
}
function setup(){
    canvas = createCanvas(800, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(800, 500);

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
