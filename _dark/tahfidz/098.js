var btn = document.getElementById("098");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('098', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('098');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
