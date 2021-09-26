var leftwristx=0;
var rightwristx=0;
var difference=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(450,450);
    canvas.position(590,220);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}

function modelLoaded() {
    console.log("The Posenet model has been loaded");
}

function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}

function draw() {
    background("blue");
    document.getElementById("displaysquare").innerHTML="Width and height of the text will be "+difference+ "px";
    fill("#09ff05");
    stroke("#09ff05");
    text("School Time! Time to learn!",50,100);
    textSize(difference);
}