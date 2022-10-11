var btn = document.getElementById("110");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('110', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('110');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
