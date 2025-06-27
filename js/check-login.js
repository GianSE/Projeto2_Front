document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os blocos de navegação
    const paginasComuns = document.getElementById('paginas');
    const autenticacao = document.getElementById('autenticacao');
    const adminLink = document.getElementById('admin-link');
    
    // Função para verificar o status de login e o papel do usuário
    function checkLoginStatus() {
        // Pega a flag de login e o papel do usuário do localStorage
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userRole = localStorage.getItem('userRole'); // 'admin' ou 'user'

        // Oculta todos os links por padrão e só mostra o necessário
        if (paginasComuns) {
            paginasComuns.style.display = 'none';
        }

        if (autenticacao) {
            autenticacao.style.display = 'flex';
        }

        if (adminLink) {
            adminLink.style.display = 'none'; // Oculta o link de admin por padrão
        }

        if (isLoggedIn) {
            // Se o usuário está logado, esconde Login/Cadastro
            if (autenticacao) {
                // Remove os links de Login e Cadastro
                autenticacao.innerHTML = '';
            }
            // Exibe os links comuns (EcoDicas, Reaproveitamento, Sobre)
            if (paginasComuns) {
                paginasComuns.style.display = 'flex';
            }
            
            // Cria e adiciona o link de Logout
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.id = 'logout-link';
            logoutLink.textContent = 'Logout';
            autenticacao.appendChild(logoutLink);
            
            // Adiciona o evento de clique para o Logout
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('isLoggedIn', 'false'); // Define a flag como false
                localStorage.removeItem('userRole'); // Remove o papel do usuário
                alert('Você foi desconectado.');
                window.location.href = 'login.html'; // Redireciona para o login
            });

            // Lógica para mostrar o link de Admin APENAS para o administrador
            if (userRole === 'admin' && adminLink) {
                adminLink.style.display = 'block'; // Mostra o link de admin
                // Adiciona o link de Admin de volta à navegação
                autenticacao.prepend(adminLink.cloneNode(true)); // Adiciona o link de volta, clonando para evitar mover o elemento
                autenticacao.querySelector('#admin-link').style.display = 'block'; // Garante que o clone também seja exibido
            }
            
        } else {
            // Se o usuário NÃO está logado, mostra Login/Cadastro e esconde o resto
            if (paginasComuns) {
                paginasComuns.style.display = 'none';
            }
            if (autenticacao) {
                autenticacao.style.display = 'flex';
                autenticacao.innerHTML = `<a href="login.html">Login</a>
                                          <a href="cadastro.html">Cadastro</a>
                                          <a href="admin.html" id="admin-link">Admin</a>`;
                // Esconde o link de admin por padrão para não logados
                document.getElementById('admin-link').style.display = 'none';
            }
        }
        
        // Ajusta o gap entre os elementos da navegação
        const navegacao = document.getElementById('navegacao');
        if (navegacao) {
            navegacao.style.gap = isLoggedIn ? '15vw' : '6vw';
        }
    }

    // Chama a função ao carregar a página
    checkLoginStatus();

    // Adiciona o evento para reagir a mudanças no localStorage (ex: login em outra aba)
    window.addEventListener('storage', checkLoginStatus);
});