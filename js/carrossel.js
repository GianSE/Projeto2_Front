document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('#carrossel_imagens .imagem-carrossel');
    let indiceAtual = 0;

    function proximaImagem() {
        // Remove a classe 'ativo' da imagem atual
        imagens[indiceAtual].classList.remove('ativo');

        // Calcula o próximo índice
        indiceAtual = (indiceAtual + 1) % imagens.length;

        // Adiciona a classe 'ativo' à próxima imagem
        imagens[indiceAtual].classList.add('ativo');
    }

    // Define o intervalo para a troca de imagens (ex: a cada 3 segundos)
    setInterval(proximaImagem, 3000); // Altere o valor (em milissegundos) para ajustar a velocidade
});