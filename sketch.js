function setup() {
    createCanvas(600,600);
    background("black");
  }

function draw() {
    stroke("blue");
    Fill("red");

    if(mouseIspressed){
        rect(mouseX, mouseY,20,35);
    }

  }
