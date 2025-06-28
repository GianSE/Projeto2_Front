document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os blocos de navegação e os links com a classe 'link-pos-login'
    const paginas = document.getElementById('paginas');
    const autenticacao = document.getElementById('autenticacao');
    const linksPosLogin = document.querySelectorAll('.link-pos-login');
    
    // Função para verificar o status de login e o papel do usuário
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userRole = localStorage.getItem('userRole');

        if (isLoggedIn) {
            // Se o usuário está logado, mostra os links de página e esconde os de autenticação
            if (paginas) {
                linksPosLogin.forEach(link => {
                    link.style.display = 'block'; // Mostra os links
                });
            }
            if (autenticacao) {
                autenticacao.innerHTML = ''; // Limpa os links de login/cadastro
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
                localStorage.setItem('isLoggedIn', 'false');
                localStorage.removeItem('userRole');
                alert('Você foi desconectado.');
                window.location.href = 'login.html';
            });

            // Lógica para mostrar o link de Admin APENAS para o administrador
            if (userRole === 'admin') {
                const adminLink = document.createElement('a');
                adminLink.href = 'admin.html';
                adminLink.id = 'admin-link';
                adminLink.textContent = 'Admin';
                autenticacao.prepend(adminLink);
            }
            
        } else {
            // Se o usuário NÃO está logado, esconde os links de página e mostra os de autenticação
            if (paginas) {
                 linksPosLogin.forEach(link => {
                    link.style.display = 'none'; // Esconde os links
                });
            }
            if (autenticacao) {
                autenticacao.innerHTML = `<a href="admin.html">Admin</a>
                                          <a href="login.html">Login</a>
                                          <a href="cadastro.html">Cadastro</a>`;
            }
        }
    }

    // Chama a função ao carregar a página
    checkLoginStatus();

    // Adiciona o evento para reagir a mudanças no localStorage
    window.addEventListener('storage', checkLoginStatus);
});