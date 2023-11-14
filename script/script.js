document.getElementById('busca').addEventListener('keyup', function() {
    let textoBusca = this.value.toLowerCase();
    let linhasTabela = document.querySelectorAll('#tabela tbody tr');
  
    linhasTabela.forEach(function(linha) {
      let colunas = linha.getElementsByTagName('td');
      let mostrarLinha = false;
  
      Array.from(colunas).forEach(function(coluna) {
        if (coluna.textContent.toLowerCase().includes(textoBusca)) {
          mostrarLinha = true;
        }
      });
  
      if (mostrarLinha) {
        linha.style.display = '';
      } else {
        linha.style.display = 'none';
      }
    });
  });
  