var btn = document.getElementById("113");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('113', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('113');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
