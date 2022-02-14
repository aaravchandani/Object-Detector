img = "";
function preload(){
    img = loadImage('Phone.png');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill('#2A52BE');
    text("Phone", 45, 75);
    noFill();
    stroke("#2A52BE")
    rect(30,60,450,350)
}