// preparar e rodar um código 
function setup() {
  createCanvas(900, 400);//criar tela
  background("pink");
}

//responsavel por desenhar 
function draw() {
  stroke("blue");
  fill("red");
  
  if(mouseIsPressed) {
    rect(mouseX,mouseY,40, 40);
  }
}
