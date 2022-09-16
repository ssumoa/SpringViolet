//listen, I'm not saying it's good, but I am saying it's done.
//and probably plottable
//and done in good fun
//with affection.


//Oh, Here's a version to export a SVG on click- in case anyone wanted one 
//for plotting or stickers or whatever (BYO fill algorithm if you don't use axidraw's  inkscape extention):
// https://editor.p5js.org/areuland/sketches/747uffXvT

let kwords = ['봄', '은', '짧', '고', '하', '루', '는', '길', '다', '보', '라', '색', '바', '이', '올', '렛', '제', '비', '꽃', '흰', '상', '여', '비', '하', '얀', '벚', '꽃', '비', '박', '하', '향', '비', '읍', '취', '향'];
let img;
//let p1 ="봄씨는 'ㅂ' 취향이구나\n나무는 나무, 봄은 비읍\n물어보지 않아도\n히읗은 벚꽃의 취향\n봄씨는 비읍을 좋아한다 무척\n예를 들면\n바이올렛\n비\n벗꽃\n박하향\n"

let p1 = ["봄 씨는 'ㅂ'취향이구나", '나무는 나무, 봄은 비읍', '물어보지 않아도', '히읗은 벚꽃의 취향', '봄씨는 비읍을 좋아한다 무척', '예를 들면', '바이올렛', '비', '벗꽃', '박하향',];
let p2 = [ '누구누구씨는', '가슴이 뭉개진 두부처럼', 
'막 떨어진 목련 꽃잎처럼', '몽글몽글해진다', '이럴 때 누구누구씨에게 아무라도', '잠깐 눈을 맞추거나 손을 잡아주면', '그는 막 울어버릴 태세', '그대로 모든 물 쏟아내고', '허물어질 태세', ];
let p3 = [
'그러니까 누구누구씨는',
'봄씨와 아무 상관없고', "'ㅎ' 모양으로 떨어져", 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ', 
"하염없이 어디론가 날아가는", '저 꽃잎들과 조금 관계를 묻자면', '나무를 서로 알고 있는 사이'];
let p4 = ['나무는 오랜 세월', '봄씨와 누군누구씨 때문에', '늙지도 못하고 자란다.', '봄마다 검은 나이테를 만들며', 
'비읍 취향도 아닌데', '비읍을 그리며', '봄을.'];

wordsOfSpring = [];

P1 = [];
P2 = [];
P3 = [];
P4 = [];

function preload() {
  shirtFont= loadFont('data/BOD_B.ttf');
  font= loadFont('data/BOD_BI.ttf');
  kfont= loadFont('data/kopubM.otf');
  img = loadImage('data/letter.png');

}

function setup() {
  createCanvas(1920, 1180);
 
}


let spd = 2; 
let val = 0;
let MAX = 255;
let index = 0;
let part = 1;

function draw() {
  textAlign(CENTER, CENTER);
  background(color('#7F00FF'));
  fill(255);
  rect(0, 1080, width, 1180);
   imageMode(CORNER);
   image(img,-50, -220, width, img.height*width/img.width);
  if (frameCount % 10 == 0) {
   
    wordsOfSpring.push(new word(random(width*0.15, width*0.85), 165));
  }
 
  for (let i=wordsOfSpring.length-1; i>=0; i--) {
    wordsOfSpring[i].move();
    wordsOfSpring[i].show();
  }
  textFont(kfont);
  textSize(40);
  smooth(); 

  val+=spd;
  let fade = MAX - abs(val % (2*MAX) - MAX);
  fill(0, fade); 
  if(part == 1){
    
  textAlign(LEFT);
    text(p1[index], width*0.05, height-46);
    if (int(val)% 510 ==0){
      index ++;
    }
    if(index==10){
      index=0;
      part++;
    }
  }
  else if(part == 2){
     textAlign(CENTER);
     text(p2[index], width*0.5, height-46);
    if (int(val)% 510 ==0){
      index ++;
    }
    if(index==9){
      index=0;
      part++;
    }
  }
  else{
     textAlign(RIGHT);
     text(p3[index], width*0.95, height-46);
    if (int(val)% 510 ==0){
      index ++;
    }
    if(index==7){
      index=0;
      part=1;
    }
  }
    
  
}

class word {
  constructor(x, y) {
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
      let index = wordsOfSpring.indexOf(this);
      wordsOfSpring.splice(index, 1);
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
     textSize(14);
   
pop();
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 1920 && mouseY > 0 && mouseY < 1080) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function keyPressed() {
 if(key == 'f'){
 let fs = fullscreen();
    fullscreen(!fs);
    }
}
