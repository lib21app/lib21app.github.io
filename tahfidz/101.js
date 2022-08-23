var btn = document.getElementById("101");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('101', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('101');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
