img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('phone.png');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);

    if (status != "") {
      for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected"
          fill('#2A52BE');
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label+""+percent+"%"+objects[i].x+15, objects[i].y+15);
    noFill();
    stroke("#2A52BE")
    rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height)
          
      }  
    } 
    fill('#2A52BE');
    text("Phone", 45, 75);
    noFill();
    stroke("#2A52BE")
    rect(30,60,450,350)
    fill('#2A52BE');
}
function modelLoaded(){
console.log("Model Loaded!")    
status = true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
    objects = results;
}
function back(){
    window.location = "home.html" 
}