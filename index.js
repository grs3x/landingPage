var card1 = window.document.getElementById("card1");
var card2 = window.document.getElementById("card2");
var card3 = window.document.getElementById("card3");
var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function swipeRight() {
    card3.style.display = "flex";
    card2.style.display = "flex";
    card1.style.display = "flex";
    setaDireita.style.display = "none";
    setaEsquerda.style.display = "flex";
    setaEsquerda.style.marginRight = "10px"
}

function swipeLeft() {
    card1.style.display = "flex";
    card2.style.display = "flex";
    card3.style.display = "flex";
    setaDireita.style.display = "flex";
    setaEsquerda.style.display = "none";
}