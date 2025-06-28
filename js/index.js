document.addEventListener('DOMContentLoaded', () => {
    const botaoComecar = document.getElementById('botao_comecar');

    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Se estiver logado, redireciona para a página de eco-dicas
    if (isLoggedIn) {
        botaoComecar.href = 'ecodicas.html';
    } else {
        // Se não estiver logado, redireciona para a página de cadastro
        botaoComecar.href = 'cadastro.html';
    }
});