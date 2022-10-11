var btn = document.getElementById("109");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('109', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('109');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
