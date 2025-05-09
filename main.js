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


  const form = document.getElementById("form-ingresso");
  const botao = form.querySelector("button");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevenir envio real

    // animação
    botao.classList.add("botao-magico");

    // mensagem de feedback
    setTimeout(() => {
      botao.classList.remove("botao-magico");
      alert("✨ Sua inscrição foi enviada ao Conselho Mágico! Prepare-se para ser convocado.");
      form.reset();
    }, 1000);
  });


