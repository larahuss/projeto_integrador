document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos do DOM
  const btnAumentar = document.getElementById('btn-aumentar');
  const btnDiminuir = document.getElementById('btn-diminuir');
  const btnContraste = document.getElementById('btn-contraste');
  const btnLerVoz = document.getElementById('btn-ler-voz');
  const btnPararVoz = document.getElementById('btn-parar-voz');

  let tamanhoFonte = 1; // Unidade base em 'rem'

  // --- 1. AUMENTAR E DIMINUIR TEXTO ---
  btnAumentar.addEventListener('click', () => {
    if (tamanhoFonte < 1.5) {
      tamanhoFonte += 0.1;
      document.documentElement.style.setProperty('--fonte-tamanho-base', `${tamanhoFonte}rem`);
    }
  });

  btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte > 0.8) {
      tamanhoFonte -= 0.1;
      document.documentElement.style.setProperty('--fonte-tamanho-base', `${tamanhoFonte}rem`);
    }
  });

  // --- 2. ALTO CONTRASTE ---
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const emContraste = document.body.classList.contains('alto-contraste');
    btnContraste.setAttribute('aria-pressed',