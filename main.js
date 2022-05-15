video ="";
object = [];
status ="";
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
} 

function draw() {
    image(video, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(video,gotResult);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "status : objects detected";
            document.getElementById("number_of_ objects").innerHTML = "number of objects dected are :"+ object.length;

            fill("#FF0000")
            percent = floor(objects[i].confidence * 100)
            text (objects[i].label + " "  + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill()
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,)
        }

    }
        function gotResult(error, results) {
            if (error) {
                console.log(error);
            }
                console.log(results);
                objects = results;
        }
   
    
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoded() {
    console.log("Model Loded!");
    status = true
    video.loop();
    video.speed(1);
    video.volume(0);
}