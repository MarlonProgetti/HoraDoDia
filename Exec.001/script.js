function Carregar() {
  var img = window.document.getElementById("imagem");
  var h = window.document.getElementById("horas");
  var bom = window.document.getElementById("Bom");
  var hoje = new Date();
  var hora = hoje.getHours();
  var min = hoje.getMinutes();
  h.innerHTML += `${hora}:${min}.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "Manhã.jpg";
    window.document.body.style.background = "Khaki";
    bom.innerHTML = "Bom Dia!!";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = "Tarde.jpg";
    window.document.body.style.background = "coral";
    bom.innerHTML = "Boa Tarde!!";
  } else {
    // Boa noite
    img.src = "Noite.jpg";
    window.document.body.style.background = "DarkSlateGrey";
    bom.innerHTML = "Boa Noite!!";
  }
}
