
var face_x = []
var face_y =[]
var face_size =[]
var face_num


var song
var songIsplay=false //false代表音樂沒撥放,true撥放
var amp
function preload(){
  song = loadSound("Ice Dance.mp3");
}





function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  face_num =6
  for (var i =0;i<face_num;i++){
    face_size[i] = random(20,100)
    face_x[i] = random(100,width)
    face_y[i] = random(100,height)
  }


  mouse_btn = createButton("stop")
  mouse_btn.position(320,30)
  mouse_btn.size(300, 100);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '32px');
  mouse_btn.style('color', 'pink');
  mouse_btn.mousePressed(mouse_btn_pressed)



  
  music_btn = createButton("falling snow and soothing music")
  music_btn.position(10,30)
  music_btn.size(300, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '32px');
  music_btn.style('color', 'pink');
  music_btn.mousePressed(music_btn_pressed)

  


  function Speech_btn_pressed(){
    myRec.onResult = showResult;
    myRec.start();  
  }
  
  function showResult()
  {
    if(myRec.resultValue==true) {
         result = myRec.resultString
           if(myRec.resultString==="下雪")
              {
                  music_btn_pressed()
               }
           if(myRec.resultString==="不要下")
              {
   
                mouse_btn_pressed()
               }
    }
  }



  function music_btn_pressed(){
    song.stop()
    song.play()
    songIsplay = true
    mosueIsplay = false
    amp=new p5.Amplitude()  
  
  }
  
  function mouse_btn_pressed(){
    song.stop()
      
  
  }
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(137, 159, 173)


}

function draw() {
  
  background(137, 159, 173);
  //textSize(50)
  //text("X:"+mouseX+"  Y:"+mouseY,50,50)
  

  



  noStroke()
  
//雪花
strokeWeight(2)
stroke(255)
noFill()
//ellipse(windowWidth/2+300,windowHeight/2,20,20)
//ellipse(windowWidth/2+300,windowHeight/2+99,20,20)
//ellipse(windowWidth/2+240,windowHeight/2+52,20,20)
//ellipse(windowWidth/2+360,windowHeight/2+52,20,20)
ellipse(mouseX,mouseY,20,20)
ellipse(mouseX,mouseY,20,20)
ellipse(mouseX,mouseY,20,20)
ellipse(mouseX,mouseY,20,20)
noStroke()
fill(255) //雪花根
//ellipse(windowWidth/2+300,windowHeight/2+50,5,80)
//ellipse(windowWidth/2+300,windowHeight/2+50,100,5)
ellipse(mouseX,mouseY,5,80)
ellipse(mouseX,mouseY,100,5)

fill(227, 168, 188)
ellipse(windowWidth/2-50,windowHeight/2-79,50,170) //耳
ellipse(windowWidth/2+50,windowHeight/2-79,50,170)

fill(87,52,52)
ellipse(windowWidth/2-50,windowHeight/2-79,40,100) //耳
ellipse(windowWidth/2+50,windowHeight/2-79,40,100)







noStroke()
  fill(87,52,52)
  

  
  fill(240,232,228)
  ellipse(windowWidth/2,windowHeight/2+110,260,220)
  
  fill(240,232,228)
  ellipse(windowWidth/2,windowHeight/2,230,184) //身體
  fill(87,52,52)
  ellipse(windowWidth/2,windowHeight/2,160,135) //胎記
  
 
  

  fill(165, 230, 230)
  ellipse(windowWidth/2-46,windowHeight/2,24,24) //眼白
  ellipse(windowWidth/2+46,windowHeight/2,24,24)


  
  fill(0)
  ellipse(windowWidth/2-47,windowHeight/2-1,20,20) //左眼睛
  ellipse(windowWidth/2+45,windowHeight/2-1,20,20) //右眼
  
  
  fill(227, 168, 188)
  ellipse(windowWidth/2,windowHeight/2+7,18,12) //鼻頭




  fill(255)
  ellipse(windowWidth/2,windowHeight/2-100,45,45) //頭飾
  ellipse(windowWidth/2-32,windowHeight/2-90,35,35)
  ellipse(windowWidth/2+32,windowHeight/2-90,35,35)
  ellipse(windowWidth/2-50,windowHeight/2-79,20,20)
  ellipse(windowWidth/2+50,windowHeight/2-79,20,20)

  ellipse(windowWidth/2,windowHeight/2+90,10,10)//鈕扣
  ellipse(windowWidth/2,windowHeight/2+125,10,10)
  ellipse(windowWidth/2,windowHeight/2+160,10,10)
  
  fill(87,52,52) //樹幹
 rect(178,499,50,70)

fill(200, 235, 185) //聖誕樹
 triangle(200,300,100,350,300,350)
 triangle(200,300,100,400,300,400)
 triangle(200,300,100,500,300,500)
//熊
 fill(237, 251, 252)
 ellipse(162,457,10)
 ellipse(200,376,10)
 ellipse(235,421,10)
 ellipse(138,380,10)
 ellipse(228,324,10)
 ellipse(256,483,10)

 ellipse(1012,203,200)
 ellipse(1004,325,250,200)
 ellipse(958,114,50)
 ellipse(1077,119,50)
 fill(87,52,52)
 ellipse(980,189,10,13)
 ellipse(1044,190,10,13)
 ellipse(1012,201,13,10)
//腮紅
fill(227, 168, 188)
 ellipse(954,208,40)
 ellipse(1070,210,40)
 //圍巾
 fill(200, 235, 185) 
 ellipse(1010,257,238,30)
 ellipse(1096,321,34,130)

 for(var j=0;j<face_num;j++)
 {
 push()
 translate(face_x[j],face_y[j])
 let f_s = face_size[j]
 noStroke()
 fill(255)
 ellipse(-f_s/4,-f_s/2,f_s/4,f_s/1.25) //耳
 ellipse(f_s/4,-f_s/2,f_s/4,f_s/1.25)

 fill(255)
 //ellipse(windowWidth/2,windowHeight/2,300,300) //身體
 ellipse(0,0,f_s) //臉
 
 fill("#F9E0E8")
 ellipse(-f_s/3.07,f_s/5,f_s/5.5,f_s/10) //腮紅
 ellipse(f_s/3.07,f_s/5,f_s/5.5,f_s/10)

 fill("#B9D3EE")
 //fill("#F9E0E8")
 ellipse(-f_s/3.6,0,f_s/4.3) //眼影
 ellipse(f_s/3.6,0,f_s/4.3)

 fill(0)
 //ellipse(-f_s/3.77,0,f_s/7.69,f_s/7.69) //左眼睛
 //ellipse(f_s/3.77,0,f_s/7.69,f_s/7.69) //右眼
 ellipse(0,f_s/13.3,f_s/11.1,f_s/20) //鼻頭
 ellipse(0,f_s/10,f_s/66.6,f_s/10) //鼻線
 noFill()
 stroke(0)
 strokeWeight(2)
 //ellipse(0,f_s/5.5,f_s/33.3,f_s/15.3) //嘴巴
//動眼睛
 fill(0)
 ellipse(-f_s/3.77+map(mouseX,0,width,-f_s/33.3,f_s/66.6),map(mouseY,0,height,-f_s/33.3,f_s/66.6),f_s/7.69) 
 ellipse(f_s/3.77+map(mouseX,0,width,-f_s/33.3,f_s/66.6),map(mouseY,0,height,-f_s/33.3,f_s/66.6),f_s/7.69)



fill("#FF8C00")
 noStroke()
ellipse(-f_s/3.84,-f_s/1.81,f_s/5.71) //花朵
ellipse(-f_s/3.63,-f_s/2.5,f_s/5.71)
ellipse(-f_s/2.98,-f_s/2.04,f_s/5.72)
ellipse(-f_s/5.26,-f_s/2.29,f_s/5.71)
ellipse(-f_s/5.71,-f_s/1.92,f_s/5.71)


  

if(!songIsplay){
  fill(255)
  ellipse(windowWidth/2-50,windowHeight/2-79,50,50) 
}
else{
vol = amp.getLevel()
  fill(255)
ellipse(windowWidth/2-50,windowHeight/2*map(vol,0,5,0,4)-79,50,50) 

}


if(!songIsplay){
  fill(255)
  ellipse(windowWidth/2-320,windowHeight*1/3-79,10,10) 
}
else{
vol = amp.getLevel()
  fill(255)
ellipse(windowWidth/2-320,windowHeight*1/3*map(vol,0,5,0,4)-79,10,10) 

}

if(!songIsplay){
  fill(255)
  ellipse(windowWidth/2-200,windowHeight*1/7-79,30,30) 
}
else{
vol = amp.getLevel()
  fill(255)
ellipse(windowWidth/2-200,windowHeight*1/7*map(vol,0,5,0,4)-79,30,30) 

}


if(!songIsplay){
  fill(255)
  ellipse(windowWidth*3/4-100,windowHeight*1/10-79,15) 
}
else{
vol = amp.getLevel()
  fill(255)
ellipse(windowWidth*3/4-100,windowHeight*1/10*map(vol,0,5,0,4)-79,15) 

}






noFill()
stroke(0)
strokeWeight(1)
if(mouseIsPressed)
   {   //mouseIsPressed為true，代表有按下滑鼠
     ellipse(0,f_s/5.5,f_s/33.3,f_s/25)
     fill("#FFFF00")
     noStroke()
     ellipse(-f_s/3.84,-f_s/2,f_s/6.66)
   }
   else
   {   //mouseIsPressed為false，代表沒有按下滑鼠
     ellipse(0,f_s/5.5,f_s/33.3,f_s/15.3)
     fill("#FFFF00")
     noStroke()
     ellipse(-f_s/3.84,-f_s/2,-f_s/10)
   }
   
   noFill()
 pop()
 
 
}

}