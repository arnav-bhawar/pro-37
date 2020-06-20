var canvas;
var database;

var draw1 = [];
var currentPath = [];

function setup() {
  canvas = createCanvas(1000,600);
 // canvas.mousePressed(startPath);
  //canvas.mouseReleased(endPath);

  database = firebase.database();
  background(255,0,0);  
 // var eraseButton = select('#selectButton');

var eraseButton = select('#eraseButton');
eraseButton.mousePressed(clearDrawing);
}

var db_draw = [];

function mouseDragged(){
  var point = {
    x:mouseX,
    y:mouseY
  }

  draw1.push(point);
  var drawRef = database.ref('draw1');
  drawRef.set({
    "d" : draw1
  })

}
/*
function startPath(){
  currentPath = [];
}

function endPath(){
  dwar1.push(currentPath);
}
*/
function draw() {
  readData()
  beginShape();
  stroke(255,255,255);
  strokeWeight(4);
  noFill();
  
  for (var i = 0; i < db_draw.length; i++) {
    vertex(db_draw[i].x, db_draw[i].y);
    endShape();
}
}



function erase(){
  //if(mousePressedOver.eraseButton){
   // var eraseButton = select('#selectButton');
    //createSprite(200,200,200,200);
    background(255);
 // }
}

function readData() {
  database.ref('draw1/').on('value', (data) => {
      db_draw = data.val().d
  })
}

function clearDrawing(){
  //db_draw = [];
  draw1 = [];
 //currentPath= [];
 textSize(50);
 //text("hi",200,200);
//var canvas1  = createCanvas(1000,600);
background(255,0,0);  


}