status = "";

function preload(){
   img = "utensils.jpg";
}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   objectDetector = ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status").innerHTML = "Detecting Objects...";
}
function modelLoaded(){
   status = true;
   console.log("Model loaded.");
   objectDetector.detect(img,gotResults);
}
function gotResults(){
   console.log(results);
}