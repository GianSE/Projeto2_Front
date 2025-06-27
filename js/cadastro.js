// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de cadastro
    const formCadastro = document.getElementById('form_cadastro');

    // Função para carregar usuários do Local Storage (reutilizada de admin.js)
    function carregarUsuarios() {
        const usuariosJSON = localStorage.getItem('usuarios');
        return usuariosJSON ? JSON.parse(usuariosJSON) : [];
    }

    // Função para salvar usuários no Local Storage (reutilizada de admin.js)
    function salvarUsuarios(usuarios) {
        const usuariosJSON = JSON.stringify(usuarios);
        localStorage.setItem('usuarios', usuariosJSON);
    }

    // Adiciona o evento de submissão do formulário
    formCadastro.addEventListener('submit', (e) => {
        // Previne o comportamento padrão de submissão do formulário (recarregar a página)
        e.preventDefault();

        // Pega os valores dos campos
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const senhaInput = document.getElementById('senha');
        const confirmarSenhaInput = document.getElementById('confirmarSenha');
        const dataNascimentoInput = document.getElementById('dataNascimento');

        const nome = nomeInput.value;
        const email = emailInput.value;
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;
        const dataNascimento = dataNascimentoInput.value;

        // **Validação 1: Confirmar se as senhas coincidem**
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, digite a mesma senha nos dois campos.');
            senhaInput.value = ''; // Limpa os campos de senha
            confirmarSenhaInput.value = '';
            senhaInput.focus(); // Coloca o foco no primeiro campo de senha
            return; // Impede o envio do formulário
        }

        // **Validação 2: Verificar se o e-mail já foi usado**
        const usuariosExistentes = carregarUsuarios();
        const emailJaExiste = usuariosExistentes.some(usuario => usuario.email === email);

        if (emailJaExiste) {
            alert('Este e-mail já está cadastrado. Por favor, use um e-mail diferente.');
            emailInput.value = ''; // Limpa o campo de e-mail
            emailInput.focus(); // Coloca o foco no campo de e-mail
            return; // Impede o envio do formulário
        }

        // Se todas as validações passarem, cria o objeto de usuário
        const dataEnvio = new Date().toLocaleString();

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha, // Nota: Não é seguro armazenar senhas em texto puro em projetos reais. Use para fins de aprendizado.
            dataNascimento: dataNascimento,
            dataEnvio: dataEnvio
        };

        // Adiciona o novo usuário e salva
        usuariosExistentes.push(novoUsuario);
        salvarUsuarios(usuariosExistentes);

        // Exibe uma mensagem de sucesso
        alert('Cadastro realizado com sucesso! Redirecionando para a página de administração.');
        
        // Redireciona para a página de administração
        window.location.href = 'login.html';
    });
});