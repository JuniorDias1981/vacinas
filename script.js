
document.getElementById('calcular').addEventListener('click', (e) => {
    e.preventDefault();
    const dataInicial = new Date(document.getElementById('data-inicial').value);
    const dias = parseInt(document.getElementById('dias').value);
    const dataFinal = new Date(dataInicial.getTime() + (dias + 1) * 24 * 60 * 60 * 1000);
    const resultado = `Data da vacina: ${dataFinal.toLocaleDateString('pt-BR')}`;
    document.getElementById('resultado').innerText = resultado;
  });
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
