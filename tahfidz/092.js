var btn = document.getElementById("092");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('092', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('092');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
