var btn = document.getElementById("091");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('091', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('091');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
