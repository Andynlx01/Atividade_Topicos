function selecionarCasa(elemento) {
    // Remove a seleção atual
    const casas = document.querySelectorAll('.casa');
    casas.forEach(casa => casa.classList.remove('selecionada'));
  
    // Adiciona a nova seleção
    elemento.classList.add('selecionada');
  }
  