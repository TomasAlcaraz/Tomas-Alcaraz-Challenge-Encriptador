botonEncriptar.onclick = function(){
  var resultado = "";

  for (let i = 0; i < textArea.value.length; i++) {
    switch (textArea.value.charAt(i)) {
      case "a":
        resultado += "ai";
        break;
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += textArea.value.charAt(i);
    }
  }
 
  textoTransformado.value = resultado;
  textArea.value = "";
  document.getElementById("text-area").focus();
};


