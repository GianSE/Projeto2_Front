// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de login
    const formLogin = document.getElementById('form_login');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');

    // Função para carregar usuários do Local Storage
    function carregarUsuarios() {
        const usuariosJSON = localStorage.getItem('usuarios');
        return usuariosJSON ? JSON.parse(usuariosJSON) : [];
    }

    // Função para salvar usuários no Local Storage
    function salvarUsuarios(usuarios) {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    // NOVA FUNÇÃO: Inicializa o Local Storage com usuários pré-cadastrados se eles não existirem
    function inicializarUsuarios() {
        const usuariosExistentes = carregarUsuarios();
        
        const usuariosIniciais = [
            {
                nome: 'Ana Silva',
                email: 'anasilva@hotmail.com',
                senha: '123',
                dataNascimento: '1998-05-15',
                dataEnvio: new Date().toLocaleString()
            },
            {
                nome: 'Bruno Costa',
                email: 'bruno@hotmail.com',
                senha: '456',
                dataNascimento: '2000-11-22',
                dataEnvio: new Date().toLocaleString()
            },
            {
                nome: 'Carlos Pereira',
                email: 'carlos@gmail.com',
                senha: 'carlos',
                dataNascimento: '', // Opcional, já que é cadastrado pelo admin
                dataEnvio: new Date().toLocaleString()
            },
            {
                nome: 'Diana Santos',
                email: 'diana@gmail.com',
                senha: 'diana',
                dataNascimento: '', // Opcional, já que é cadastrado pelo admin
                dataEnvio: new Date().toLocaleString()
            }
        ];

        let usuariosAdicionados = false;
        
        usuariosIniciais.forEach(novoUsuario => {
            // Verifica se o e-mail já existe na lista de usuários existentes
            const emailJaExiste = usuariosExistentes.some(usuario => usuario.email === novoUsuario.email);
            
            if (!emailJaExiste) {
                usuariosExistentes.push(novoUsuario);
                usuariosAdicionados = true;
            }
        });

        // Salva a lista de usuários somente se novos usuários foram adicionados
        if (usuariosAdicionados) {
            salvarUsuarios(usuariosExistentes);
        }
    }

    // Chama a função para inicializar os usuários ao carregar a página
    inicializarUsuarios();

    // Adiciona o evento de submissão do formulário
    formLogin.addEventListener('submit', (e) => {
        // Previne o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();

        const email = emailInput.value;
        const senha = senhaInput.value;

        // VERIFICAÇÃO DE ADMIN: Se as credenciais forem 'admin@admin' e 'admin'
        if (email === 'admin@admin' && senha === 'admin') {
            localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado
            localStorage.setItem('userRole', 'admin'); // Define o papel como admin
            alert('Login de administrador bem-sucedido! Redirecionando para a página de administração.');
            window.location.href = 'admin.html'; // Redireciona para a página de admin
            return; // Interrompe a função
        }

        // VERIFICAÇÃO DE USUÁRIO COMUM: Se não for admin, verifica os usuários cadastrados
        const usuarios = carregarUsuarios();
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
            localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado
            localStorage.setItem('userRole', 'user'); // Define o papel como usuário comum
            alert('Login bem-sucedido! Redirecionando para a página inicial.');
            window.location.href = 'index.html'; // Redireciona para a página inicial
        } else {
            // Se as credenciais estiverem incorretas
            alert('E-mail ou senha incorretos. Por favor, tente novamente.');
            senhaInput.value = '';
            emailInput.value = '';
            emailInput.focus();
        }
    });
});