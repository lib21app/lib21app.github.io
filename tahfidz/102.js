var btn = document.getElementById("102");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('102', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('102');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
