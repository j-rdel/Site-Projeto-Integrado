var cpf = document.getElementById("txtCpf").value;
var senha = document.getElementById("txtSenha").value;

function logar() {
  if (cpf == "" || isNaN(cpf) || senha == "" || isNaN(senha)) {
    alert(
      "Um campo inserido está em branco. Por favor, preencha esse campo para entrar."
    );
    return;
  }
}

function limpar() {
  cpf == "";
  senha == "";
  return;
}

$(document).ready(function () {
  $("#txtCpf").mask("999.999.999-99");
});
