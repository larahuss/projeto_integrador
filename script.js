document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos
  const btnAumentar = document.getElementById('btn-aumentar');
  const btnDiminuir = document.getElementById('btn-diminuir');
  const btnContraste = document.getElementById('btn-contraste');
  
  let tamanhoFonteAtual = 1; // Valor em 'rem'

  // Função para Aumentar a Fonte
  btnAumentar.addEventListener('click', () => {
    if (tamanhoFonteAtual < 1.6) { // Limite máximo para não quebrar o layout
      tamanhoFonteAtual += 0.1;
      document.documentElement.style.setProperty('--fonte-tamanho-base', `${tamanhoFonteAtual}rem`);
    }
  });

  // Função para Diminuir a Fonte
  btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonteAtual > 0.8) { // Limite mínimo
      tamanhoFonteAtual -= 0.1;
      document.documentElement.style.setProperty('--fonte-tamanho-base', `${tamanhoFonteAtual}rem`);
    }
  });

  // Função para Alternar Modo Alto Contraste
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    
    // Atualiza estado do ARIA para leitores de tela
    const estaEmAltoContraste = document.body.classList.contains('alto-contraste');
    btnContraste.setAttribute('aria-pressed', estaEmAltoContraste);
  });
});