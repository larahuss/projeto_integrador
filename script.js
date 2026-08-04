document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos botões
  const btnAumentar = document.getElementById('btn-aumentar');
  const btnDiminuir = document.getElementById('btn-diminuir');
  const btnContraste = document.getElementById('btn-contraste');
  
  let tamanhoFonte = 1; // Valor em 'rem'

  // Função para Aumentar o Tamanho da Fonte
  btnAumentar.addEventListener('click', () => {
    if (tamanhoFonte < 1.5) { // Limite máximo para segurança
      tamanhoFonte += 0.1;
      document.documentElement.style.setProperty('--fonte-tamanho-base', `${tamanhoFonte}rem`);
    }
  });

  // Função para Diminuir o Tamanho da Fonte
  btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte > 0.8) { // Limite mínimo
      tamanhoFonte -= 0.1;
      document.documentElement.style.setProperty('--fonte-tamanho-base', `${tamanhoFonte}rem`);
    }
  });

  // Função para Ativar/Desativar o Modo Alto Contraste
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const emContraste = document.body.classList.contains('alto-contraste');
    
    // Atualização de acessibilidade para leitores de tela
    btnContraste.setAttribute('aria-pressed', emContraste);
  });
});