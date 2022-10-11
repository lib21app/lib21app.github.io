var btn = document.getElementById("096");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('096', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('096');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
