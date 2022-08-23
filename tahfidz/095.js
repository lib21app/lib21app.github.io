var btn = document.getElementById("095");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('095', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('095');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
