$(document).ready(function () {
  function search(separador) {
    $("#busca").keyup(function () {
      var index = $(this).index();
      var nth = "#frontEndSearch tbody td:nth-child(3)"; // Mude para o índice da coluna do Produto
      var valor = $(this).val().toUpperCase();
      var palavras = $.trim(valor).replace(new RegExp((separador + '+'), 'g'), separador).split(separador);
      $("#frontEndSearch tbody tr").show();
      $(nth).each(function () {
        var td = this;
        $(palavras).each(function () {
          var palavra = this;
          if ($(td).text().toUpperCase().indexOf(palavra) < 0) {
            $(td).parent().hide();
          }
        });
      });
    });
  }

  search(' ');
});
