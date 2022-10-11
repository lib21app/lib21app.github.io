var btn = document.getElementById("099");

function myFunction() {
  if (btn.innerHTML=="Yes! saya sudah hafal") btn.innerHTML = "Saya belum hafal";
  else btn.innerHTML = "Yes! saya sudah hafal";
  window.localStorage.setItem('099', btn.innerHTML);
}

var btnLabel = window.localStorage.getItem('099');
if (btnLabel) {
  btn.innerHTML = btnLabel;
}
