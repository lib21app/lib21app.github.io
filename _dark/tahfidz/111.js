var btn = document.getElementById("111");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('111', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('111');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
