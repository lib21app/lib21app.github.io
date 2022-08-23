var btn = document.getElementById("112");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('112', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('112');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
