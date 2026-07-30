/* =========================
   CONTROLE DE FONTE
========================= */

let tamanhoFonte = 16;


function aumentarFonte(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

}



function diminuirFonte(){

    if(tamanhoFonte > 10){

        tamanhoFonte -= 2;

    }

    document.body.style.fontSize = tamanhoFonte + "px";

}





/* =========================
   ALTO CONTRASTE
========================= */


function altoContraste(){

    document.body.classList.toggle("contraste");

}





/* =========================
   LEITOR DE TELA
========================= */


function lerPagina(){


    let texto = document.body.innerText;


    let leitura = new SpeechSynthesisUtterance(texto);


    leitura.lang = "pt-BR";


    leitura.rate = 1;


    speechSynthesis.cancel();


    speechSynthesis.speak(leitura);


}