const time = new Date().getHours();
let greeting;
if (time < 4) {
  greeting = "Selamat dini hari,";
} else if (time < 10) {
  greeting = "Selamat pagi,";
  } else if (time < 14) {
  greeting = "Selamat siang,";
  } else if (time < 17) {
  greeting = "Selamat sore,";
  } else if (time < 18) {
  greeting = "Selamat menikmati senja,";
  } else if (time < 19) {
  greeting = "Selamat petang,";
} else {
  greeting = "Selamat malam,";
}
document.getElementById("greeting1").innerHTML = greeting;
document.getElementById("greeting2").innerHTML = greeting;
document.getElementById("greeting3").innerHTML = greeting;
document.getElementById("greeting4").innerHTML = greeting;
document.getElementById("greeting5").innerHTML = greeting;
document.getElementById("greeting6").innerHTML = greeting;
document.getElementById("greeting7").innerHTML = greeting;
document.getElementById("greeting8").innerHTML = greeting;
document.getElementById("greeting9").innerHTML = greeting;