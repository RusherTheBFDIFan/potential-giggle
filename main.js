objects = [];
results = [];
rightwristx = 0;
rightwristy = 0;
rightwristscore = 0;
function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {
	canvas = createCanvas(600, 400);
  canvas.center();
  video = createCapture(VIDEO);
}
  
function draw() {
	image(video, 0, 0, 480, 380);
  circle(rightwristx, rightwristy, 400, 400)
}

function modelLoaded() {
  console.log("Model loaded.")
}

function start() {
  objectDetector = ml5.objectDetector('poseNet', modelLoaded);
}

function gotPoses(results) {
   if (results != []){
    console.log(results)
    rightwristx = results[0].pose.rightwrist.x;
    rightwristy = results[0].pose.rightwrist.y;
   }
}