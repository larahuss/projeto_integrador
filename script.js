// Tamanho inicial da fonte

let tamanhoFonte = 20;


// ==============================
// AUMENTAR FONTE
// ==============================

function aumentarFonte(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

}


// ==============================
// DIMINUIR FONTE
// ==============================

function diminuirFonte(){

    if(tamanhoFonte > 14){

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}


// ==============================
// ALTO CONTRASTE
// ==============================

function altoContraste(){

    document.body.classList.toggle("contraste");

}


// ==============================
// LEITOR DE TELA
// ==============================

function lerPagina(){

    // Pega todo o texto visível da página

    let texto = document.body.innerText;


    // Verifica se o navegador possui voz

    if('speechSynthesis' in window){


        let mensagem = new SpeechSynthesisUtterance(texto);


        mensagem.lang = "pt-BR";


        mensagem.rate = 1;


        mensagem.pitch = 1;


        speechSynthesis.speak(mensagem);


    }

    else{

        alert("Seu navegador não possui suporte ao leitor de tela.");

    }

}


// ==============================
// PARAR LEITURA
// ==============================

function pararLeitura(){

    speechSynthesis.cancel();

}