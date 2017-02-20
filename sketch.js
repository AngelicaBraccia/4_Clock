function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
}

function draw() {
  background(40);
  translate(width/2,height/2);

  //hours
  if(hour()>12){var H=hour()-12
  }else{var H = hour()}
  drawC(H,12,10,90,255)
  
  //minutes
  drawB(minute(),60,10,150,120);
 
  //seconds
  drawA(second(),60,9,220,(250));
  drawA(second()-1,60,8,220,(200));
  drawA(second()-2,60,7,220,(180));
  drawA(second()-3,60,6,220,(160));
  drawA(second()-4,60,5,220,(140));
  drawA(second()-5,60,4,220,(120));
  drawA(second()-6,60,3,220,(100));
  drawA(second()-7,60,2,220,(80));
  drawA(second()-8,60,1,220,(60));
  drawA(second()-9,60,1,220,(50));
  }
  
  //for hours
  function drawC(Cvalue,Crange,Cweight,Cradius,Ccolor){
  var angle = map(Cvalue,0,Crange,-90,270);
  stroke(Ccolor);
  strokeWeight(Cweight);
  line((Cradius-50)*cos(angle),(Cradius-50)*sin(angle),Cradius*cos(angle),Cradius*sin(angle));
  }
  
  //for minutes
  function drawB(Bvalue,Brange,Bweight,Bradius,Bcolor){
  var angle = map(Bvalue,0,Brange,-90,270);
  stroke(Bcolor);
  strokeWeight(Bweight);
  line((Bradius-100)*cos(angle),(Bradius-100)*sin(angle),Bradius*cos(angle),Bradius*sin(angle));
  }

  //for seconds
  function drawA(needlevalue,needlerange,needleweight,needleradius,needlecol){
  var angle = map(needlevalue,0,needlerange,-90,270)
  stroke(needlecol)
  strokeWeight(needleweight)
  line((needleradius-40)*cos(angle),(needleradius-40)*sin(angle),needleradius*cos(angle),needleradius*sin(angle))
  }