document.addEventListener('DOMContentLoaded', function () {
  const btnAumentar = document.getElementById('btn-aumentar');
  const btnDiminuir = document.getElementById('btn-diminuir');
  const btnContraste = document.getElementById('btn-contraste');
  const btnLerVoz = document.getElementById('btn-ler-voz');
  const btnPararVoz = document.getElementById('btn-parar-voz');

  let tamanhoFonte = 1.0;

  // 1. AUMENTAR FONTE
  if (btnAumentar) {
    btnAumentar.addEventListener('click', function () {
      if (tamanhoFonte < 1.5) {
        tamanhoFonte += 0.1;
        document.documentElement.style.setProperty('--fonte-tamanho-base', tamanhoFonte + 'rem');
      }
    });
  }

  // 2. DIMINUIR FONTE
  if (btnDiminuir) {
    btnDiminuir.addEventListener('click', function () {
      if (tamanhoFonte > 0.8) {
        tamanhoFonte -= 0.1;
        document.documentElement.style.setProperty('--fonte-tamanho-base', tamanhoFonte + 'rem');
      }
    });
  }

  // 3. ALTO CONTRASTE
  if (btnContraste) {
    btnContraste.addEventListener('click', function () {
      document.body.classList.toggle('alto-contraste');
      const emContraste = document.body.classList.contains('alto-contraste');
      btnContraste.setAttribute('aria-pressed', emContraste);
    });
  }

  // 4. LEITURA POR VOZ (TEXT-TO-SPEECH)
  if ('speechSynthesis' in window && btnLerVoz && btnPararVoz) {
    const sintetizador = window.speechSynthesis;

    btnLerVoz.addEventListener('click', function () {
      sintetizador.cancel(); // Limpa falas anteriores

      const abaAtiva = document.querySelector('.tab-pane.active');
      if (!abaAtiva) return;

      const texto = abaAtiva.innerText || abaAtiva.textContent;
      const locucao = new SpeechSynthesisUtterance(texto);
      locucao.lang = 'pt-BR';

      locucao.onstart = function () {
        btnLerVoz.classList.add('d-none');
        btnPararVoz.classList.remove('d-none');
      };

      locucao.onend = function () {
        btnLerVoz.classList.remove('d-none');
        btnPararVoz.classList.add('d-none');
      };

      locucao.onerror = function () {
        btnLerVoz.classList.remove('d-none');
        btnPararVoz.classList.add('d-none');
      };

      sintetizador.speak(locucao);
    });

    btnPararVoz.addEventListener('click', function () {
      sintetizador.cancel();
      btnLerVoz.classList.remove('d-none');
      btnPararVoz.classList.add('d-none');
    });

    // Parar leitura se trocar de aba
    const botonsAbas = document.querySelectorAll('button[data-bs-toggle="tab"]');
    botonsAbas.forEach(function (aba) {
      aba.addEventListener('click', function () {
        sintetizador.cancel();
        btnLerVoz.classList.remove('d-none');
        btnPararVoz.classList.add('d-none');
      });
    });
  }
});