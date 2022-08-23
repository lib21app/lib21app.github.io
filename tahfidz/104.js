var btn = document.getElementById("104");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('104', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('104');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
