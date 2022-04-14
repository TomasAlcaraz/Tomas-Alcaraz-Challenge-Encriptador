botonDesencriptar.onclick = function(){
  var a = textArea.value;

  a = a.replaceAll("ai", "a");
  a = a.replaceAll("enter", "e");
  a = a.replaceAll("imes", "i");
  a = a.replaceAll("ober", "o");
  a = a.replaceAll("ufat", "u");

  textoTransformado.value = a;
  textArea.value = "";
  document.getElementById("text-area").focus();
};

