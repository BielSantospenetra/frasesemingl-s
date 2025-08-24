document.getElementById("botao").addEventListener("click", function() {
document.getElementById("frase").innerText = "qual é seu nome?";
});
document.getElementById("ingles").addEventListener("click", function() {
document.getElementById("frase").innerText = "what is your name?";
});


    






  


document.getElementById("potug").addEventListener("click", function() {
document.getElementById("frases").innerText = "como você esta?";
});
document.getElementById("engles").addEventListener("click", function() {
document.getElementById("frases").innerText = "how are you? ";
});


document.getElementById("potuga").addEventListener("click", function() {
document.getElementById("frasesa").innerText = "prazer em te conhecer?";
});
document.getElementById("englesa").addEventListener("click", function() {
document.getElementById("frasesa").innerText = "nice to meet you! ";
});

document.getElementById("portub").addEventListener("click", function() {
document.getElementById("fraseb").innerText = "de onde você è?";
});
document.getElementById("englesb").addEventListener("click", function() {
document.getElementById("fraseb").innerText = "where are you from? ";
});




function traduzirFraser(frasess) {
    document.getElementById("frasesb").innerText = frasess;
}

document.getElementById("portub").addEventListener("click", function() {
    traduzirFraser("de onde você é?");
});

document.getElementById("inglesc").addEventListener("click", function() {
    traduzirFraser("where are you from?");
});


function traduzirFrase(frase) {
    document.getElementById("bfraseb").innerText = frase;
}

document.getElementById("porturb").addEventListener("click", function() {
    traduzirFrase("com licença");
});

document.getElementById("inglessb").addEventListener("click", function() {
    traduzirFrase("excuse me");
});




function traduzirFraserc(fraserrc) {
    document.getElementById("frasesc").innerText = fraserrc;
}

document.getElementById("portuc").addEventListener("click", function() {
    traduzirFraserc("desculpa");
});

document.getElementById("inglesc").addEventListener("click", function() {
    traduzirFraserc("I am sorry");
});



function traduzirfraserd(fraserd) {
    const frase = document.getElementById("fraserd");
    frase.classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("fraserd").innerText = fraserd;
    frase.classList.remove("fade-out");
  }, 500); // tempo igual ao da transição



}

document.getElementById("portud").addEventListener("click", function () {
    traduzirfraserd("pode me ajudar?");
});

document.getElementById("inglesd").addEventListener("click", function () {
    traduzirfraserd("can you help me?");
});