document.addEventListener('DOMContentLoaded', () => {
    const botaoComecar = document.getElementById('botao_comecar');

    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Se estiver logado, redireciona para a página de eco-dicas e muda o texto
    if (isLoggedIn) {
        botaoComecar.href = 'ecodicas.html';
        botaoComecar.textContent = 'Comece Agora'; // Altera o texto para 'Comece Agora'
    } else {
        // Se não estiver logado, redireciona para a página de cadastro e muda o texto
        botaoComecar.href = 'cadastro.html';
        botaoComecar.textContent = 'Cadastre-se Agora'; // Altera o texto para 'Cadastre-se Agora'
    }
});