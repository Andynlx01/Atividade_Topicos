function selecionarCasa(elemento) {
    const casas = document.querySelectorAll('.casa');
    casas.forEach(casa => casa.classList.remove('selecionada'));
  
    elemento.classList.add('selecionada');
  }
  function toggleEvento(elemento) {
    elemento.classList.toggle('ativo');
  }
  document.addEventListener("DOMContentLoaded", () => {
    const historia = document.querySelector('.historia');
    if (historia) {
      setTimeout(() => {
        historia.classList.add('visivel');
      }, 300);
    }
  });
