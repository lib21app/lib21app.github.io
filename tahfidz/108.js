var btn = document.getElementById("108");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('108', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('108');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
