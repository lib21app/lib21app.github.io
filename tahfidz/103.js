var btn = document.getElementById("103");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('103', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('103');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
