var firstPlayer = Math.floor(Math.random() * 6) + 1;
var secondPlayer = Math.floor(Math.random() * 6) + 1;

if (firstPlayer>secondPlayer){
  document.querySelector("h2").innerHTML="Player one";
}
else if (firstPlayer==secondPlayer) {
  document.querySelector("h2").innerHTML="It's a Draw";

}
else
{
document.querySelector("h2").innerHTML="Player Two";

}

switch (firstPlayer) {
  case 1:
 document.getElementById("one").style.visibility = "visible";
 document.getElementById("one").src = "1.png";
  break;
  case 2:
  document.getElementById("one").style.visibility = "visible";
  document.getElementById("one").src = "2.png";
  break;
  case 3:
  document.getElementById("one").style.visibility = "visible";
  document.getElementById("one").src = "3.png";
  break;
  case 4:
  document.getElementById("one").style.visibility = "visible";
  document.getElementById("one").src = "4.png";
  break;
  case 5:
  document.getElementById("one").style.visibility = "visible";
  document.getElementById("one").src = "5.png";
  break;
  case 6:
  document.getElementById("one").style.visibility = "visible";
  document.getElementById("one").src = "6.png";
  break;

}
switch (secondPlayer) {
  case 1:
 document.getElementById("two").style.visibility = "visible";
 document.getElementById("two").src = "1.png";
  break;
  case 2:
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").src = "2.png";
  break;
  case 3:
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").src = "3.png";
  break;
  case 4:
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").src = "4.png";
  break;
  case 5:
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").src = "5.png";
  break;
  case 6:
  document.getElementById("two").style.visibility = "visible";
  document.getElementById("two").src = "6.png";
  break;
}
