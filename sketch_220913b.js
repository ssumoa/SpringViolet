//listen, I'm not saying it's good, but I am saying it's done.
//and probably plottable
//and done in good fun
//with affection.


//Oh, Here's a version to export a SVG on click- in case anyone wanted one 
//for plotting or stickers or whatever (BYO fill algorithm if you don't use axidraw's  inkscape extention):
// https://editor.p5js.org/areuland/sketches/747uffXvT

let kwords = ['봄', '은', '짧', '고', '하', '루', '는', '길', '다', '보', '라', '색', '바', '이', '올', '렛', '제', '비', '꽃', '흰', '상', '여', '비', '하', '얀', '벚', '꽃', '비', '박', '하', '향', '비', '읍', '취', '향'];
let img;
wordsOfWisdom = [];

function preload() {

  kfont= loadFont('data/kopubM.otf');
  img = loadImage('data/letter.png');

}

function setup() {
  createCanvas(1920, 1080);
 
}

function draw() {
  textAlign(CENTER, CENTER);
  background(color('#7F00FF'));
    imageMode(CORNER);
   image(img,-50, -220, width, img.height*width/img.width);
  if (frameCount % 10 == 0) {
   // wordsOfWisdom.push(new wisdom(670, 173));
    wordsOfWisdom.push(new wisdom(random(width*0.15, width*0.85), 165));
  }
 
  
  
  for (let i=wordsOfWisdom.length-1; i>=0; i--) {
    wordsOfWisdom[i].move();
    wordsOfWisdom[i].show();
  }
}

class wisdom {
  constructor(x, y) {
    //right hand(675, 173)
    //left hand(137, 185)
    this.x = x;
    this.y = y;
    this.xVel = random(-0.5, 0.5);
    this.yAcc = 0.03;
    this.yVel = -1.5;
    this.word = floor(random(0, kwords.length));
    this.rotAcc= random(-0.01, 0.01);
    this.scale=0.2;
    this.rot=0;
  }
  move() {
    this.x += this.xVel;
    this.yVel += this.yAcc;
    this.y += this.yVel;
    this.rot+=this.rotAcc;
    if(this.scale<1.4){
      this.scale+=0.011;
    }
    
    if (this.y > height*1.2) {
      let index = wordsOfWisdom.indexOf(this);
      wordsOfWisdom.splice(index, 1);
    }
  }
  show() {
    push();
    fill('#FFFEEF');
   textFont(kfont);
    noStroke();
    textSize(24);
    translate(this.x, this.y);
    scale(this.scale);
    rotate(this.rot);
    text(kwords[this.word], 0, 0);
pop();
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 1920 && mouseY > 0 && mouseY < 1080) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
