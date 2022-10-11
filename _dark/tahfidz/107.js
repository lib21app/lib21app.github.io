var btn = document.getElementById("107");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('107', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('107');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
