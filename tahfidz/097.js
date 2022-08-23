var btn = document.getElementById("097");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('097', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('097');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
