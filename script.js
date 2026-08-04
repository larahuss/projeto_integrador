document.addEventListener('DOMContentLoaded', function () {
  
  // Elementos do DOM
  var btnAumentar = document.getElementById('btn-aumentar');
  var btnDiminuir = document.getElementById('btn-diminuir');
  var btnContraste = document.getElementById('btn-contraste');
  var btnLerVoz = document.getElementById('btn-ler-voz');
  var btnPararVoz = document.getElementById('btn-parar-voz');

  var tamanhoFonte = 1.0;

  // 1. AUMENTAR FONTE
  if (btnAumentar) {
    btnAumentar.onclick = function () {
      if (tamanhoFonte < 1.4) {
        tamanhoFonte += 0.1;
        document.documentElement.style.fontSize = tamanhoFonte + 'rem';
      }
    };
  }

  // 2. DIMINUIR FONTE
  if (btnDiminuir) {
    btnDiminuir.onclick = function () {
      if (tamanhoFonte > 0.8) {
        tamanhoFonte -= 0.1;
        document.documentElement.style.fontSize = tamanhoFonte + 'rem';
      }
    };
  }

  // 3. ALTO CONTRASTE
  if (btnContraste) {
    btnContraste.onclick = function () {
      document.body.classList.toggle('alto-contraste');
    };
  }

  // 4. LEITURA POR VOZ
  if ('speechSynthesis' in window && btnLerVoz && btnPararVoz) {
    var sintetizador = window.speechSynthesis;

    btnLerVoz.onclick = function () {
      sintetizador.cancel(); // Para falas anteriores

      var abaAtiva = document.querySelector('.tab-pane.active');
      if (!abaAtiva) return;

      var texto = abaAtiva.innerText;
      var fala = new SpeechSynthesisUtterance(texto);
      fala.lang = 'pt-BR';

      fala.onstart = function () {
        btnLerVoz.classList.add('d-none');
        btnPararVoz.classList.remove('d-none');
      };

      fala.onend = function () {
        btnLerVoz.classList.remove('d-none');
        btnPararVoz.classList.add('d-none');
      };

      fala.onerror = function () {
        btnLerVoz.classList.remove('d-none');
        btnPararVoz.classList.add('d-none');
      };

      sintetizador.speak(fala);
    };

    btnPararVoz.onclick = function () {
      sintetizador.cancel();
      btnLerVoz.classList.remove('d-none');
      btnPararVoz.classList.add('d-none');
    };

    // Parar áudio se o usuário mudar de aba
    var abas = document.querySelectorAll('button[data-bs-toggle="tab"]');
    abas.forEach(function (aba) {
      aba.addEventListener('click', function () {
        sintetizador.cancel();
        btnLerVoz.classList.remove('d-none');
        btnPararVoz.classList.add('d-none');
      });
    });
  }
});