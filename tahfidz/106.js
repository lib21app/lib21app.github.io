var btn = document.getElementById("106");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('106', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('106');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
