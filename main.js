cocossd = ""

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded")
}

function draw() {
    image(video, 0, 0, 480, 380);
}