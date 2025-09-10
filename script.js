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



function traduzirfraserd(fraserrd) {
    document.getElementById("fraserd").innerText = fraserrd;
    
}

document.getElementById("portud").addEventListener("click", function () {
    traduzirfraserd("pode me ajudar?");
});

document.getElementById("inglesd").addEventListener("click", function () {
    traduzirfraserd("can you help me?");
});


function animar() {
    const frase = document.getElementById("fraserd");
    frase.classList.add("fade-out");

    setTimeout(() => {
        frase.classList.remove("fade-out");
    }, 500);
}







function traduzirfrasee() {
    document.getElementById("fraseree").innerText = "obrigado";
 
}
function traduzirfrasee2() { 
    document.getElementById("fraseree").innerText = "thank you";
}

function traduzirfrasef() {
    document.getElementById("fraserf").innerText = "eu não entedendo"
}
function traduzirfrasef2() {
    document.getElementById("fraserf").innerText = "i don´t understand";
}

function traduzirfraseg() {
    document.getElementById("fraserg").innerText = "você pode repetir por favor";
}

function traduzirfraseg2() {
    document.getElementById("fraserg").innerText = "cold you repeat that, please";
}

function traduzirfraserh() {
    document.getElementById("fraserh").innerText = " te vejo depois";
}

function traduzirfraserh2() {
    document.getElementById("fraserh").innerText = " see you later";
}

function traduzirfraseri() {
    document.getElementById("fraseri").innerText = "de nada";
}

function traduzirfraseri2() {
    document.getElementById("fraseri").innerText = "You're welcome";
}

function traduzirfraserj() {
    document.getElementById("fraserj").innerText = "estou com fome";
}

function traduzirfraserj2() {
    document.getElementById("fraserj").innerText = "I hungry";
}
function  traduzirfraserk() {
    document.getElementById("fraserk").innerText = "onde é o banheiro?";
}
function  traduzirfraserk2() {
    document.getElementById("fraserk").innerText = "where is the bathroon";
}

function  traduzirfraserl() {
    document.getElementById("fraserl").innerText = "Boa noite";
}

function  traduzirfraserl2() {
    document.getElementById("fraserl").innerText = "good night";
}
function traduzirfrasel2() {
    document.getElementById("fraserl").innerText = "boa noite";
}
function traduzirfraserm() {
    document.getElementById("fraserm").innerText = "bom dia";
}
function traduzirfraserm2() {
    document.getElementById("fraserm").innerText = "good morning";
}

function traduzirfrasern() {
    document.getElementById("frasern").innerText = "quanta custa isso daqui?";
}
function traduzirfrasern22() {
    document.getElementById("frasern").innerText = "how much does this cost?";
}









/*function traduzirfraserd(fraserd) {
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
*/