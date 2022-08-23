var btn = document.getElementById("090");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('090', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('090');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
