function copy() {
  var copyText = document.querySelector("#texto-transformado");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
