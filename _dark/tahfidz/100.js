var btn = document.getElementById("100");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('100', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('100');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
