var btn = document.getElementById("105");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('105', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('105');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
