// Validação de formulário de cadastro de cliente e pet
function validarFormularioCadastro() {
    var nomeCliente = document.getElementById('nome_cliente').value;
    var emailCliente = document.getElementById('email_cliente').value;
    var telefoneCliente = document.getElementById('telefone_cliente').value;
    var nomePet = document.getElementById('nome_pet').value;
    var tipoPet = document.getElementById('tipo_pet').value;
    var racaPet = document.getElementById('raca_pet').value;
    var temperamentoPet = document.getElementById('temperamento_pet').value;

    if (nomeCliente === "" || emailCliente === "" || telefoneCliente === "" || nomePet === "" || tipoPet === "" || racaPet === "" || temperamentoPet === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailCliente)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    var telefonePattern = /^\d{10,11}$/;
    if (!telefonePattern.test(telefoneCliente)) {
        alert("Por favor, insira um número de telefone válido (10 ou 11 dígitos).");
        return false;
    }

    return true;
}

// Validação de formulário de agendamento
function validarFormularioAgendamento() {
    var dataAgendamento = document.getElementById('data_agendamento').value;
    var horaAgendamento = document.getElementById('hora_agendamento').value;
    var servico = document.getElementById('servico').value;

    if (dataAgendamento === "" || horaAgendamento === "" || servico === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    var dataAtual = new Date();
    var dataEscolhida = new Date(dataAgendamento);

    if (dataEscolhida < dataAtual) {
        alert("Por favor, escolha uma data futura.");
        return false;
    }

    return true;
}
