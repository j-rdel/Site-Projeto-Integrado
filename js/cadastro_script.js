function cadastrar(){
    var nome = document.getElementById("txtNome").value;
    var sobrenome = document.getElementById("txtSobrenome").value;
    var cpf = document.getElementById("txtCpf").value;
    var telefone = document.getElementById("txtTelefone").value;
    var email = document.getElementById("txtEmail").value;
    var endereco = document.getElementById("txtEndereco").value;
    var cep = document.getElementById("txtCep").value;
    var dataNascimento  = document.getElementById("txtDataNascimento").value;
    var senha = document.getElementById("txtSenha").value;
    var confSenha = document.getElementById("txtConfSenha").value;

    if(senha != confSenha){
        alert("As senhas não conferem")
    }

    if(nome == "" || isNaN(nome) || sobrenome == "" || isNaN(sobrenome) || cpf == "" || isNaN(cpf) || telefone == "" || isNaN(telefone) || email == "" || isNaN(email) || endereco == "" || isNaN(endereco) || cep == "" || isNaN(cep) || dataNascimento == "" || isNaN(dataNascimento) || senha == "" || isNaN(senha) || confSenha  == "" || isNaN(confSenha)){
        alert("Um campo inserido está em branco. Por favor, preencha esse campo para concluir o cadastro.");
        return
    }
}

function verificarPasse(){
    var tipoPasse = document.getElementById("txtPasse").value;

    if(tipoPasse == "estudante"){
        // Ativa o campo de matricula
        document.getElementById("inputEstudante").style.opacity = "100%";  
        document.getElementById("txtMatricula").disabled = false;
        document.getElementById("txtMatricula").required = true;
    } else {
        // Desativa o campo de matricula
        document.getElementById("inputEstdante").style.opacity = "50%";  
        document.getElementById("txtMatricula").disabled = true;
        document.getElementById("txtMatricula").required = false;
    }
}

$(document).ready(function(){
    $("#txtCpf").mask("999.999.999-99");
    $("#txtTelefone").mask("(99) 99999-9999");
    $("#txtCep").mask("99999-999");
})