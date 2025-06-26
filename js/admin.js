//CRITERIO 1 (2,0)
/* (2,0) Função adequada para incluir dados do formulário em uma lista e no Local Storage. Os
dados deverão ser armazenados em uma única chave, com valores em um objeto JSON. */


// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos do HTML
    const formUsuario = document.getElementById('form_usuario');
    const listaUsuarios = document.getElementById('lista_usuarios');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');

    // 2. Carrega os usuários do Local Storage quando a página é carregada
    function carregarUsuarios() {
        // Pega os dados da chave 'usuarios' no Local Storage
        const usuariosJSON = localStorage.getItem('usuarios');
        // Se houver dados, converte de JSON para um array de objetos JavaScript
        return usuariosJSON ? JSON.parse(usuariosJSON) : [];
    }

    // 3. Salva os usuários no Local Storage
    function salvarUsuarios(usuarios) {
        // Converte o array de objetos JavaScript para uma string JSON
        const usuariosJSON = JSON.stringify(usuarios);
        // Salva a string JSON no Local Storage na chave 'usuarios'
        localStorage.setItem('usuarios', usuariosJSON);
    }

    // 4. Renderiza a lista de usuários no HTML
    function renderizarLista() {
        // Pega a lista de usuários do Local Storage
        const usuarios = carregarUsuarios();
        // Limpa a lista atual no HTML
        listaUsuarios.innerHTML = '';
        
        // Para cada usuário, cria um item de lista (<li>)
        usuarios.forEach((usuario, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${usuario.dataEnvio} - Nome: ${usuario.nome}, E-mail: ${usuario.email}</span>
                <button class="btn_excluir" data-index="${index}">Excluir</button>
            `;
            listaUsuarios.appendChild(li);
        });
    }
    
    // 5. Adiciona o evento de submissão do formulário
    formUsuario.addEventListener('submit', (e) => {
        // Previne o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();

        // Pega os valores dos campos de input
        const nome = nomeInput.value;
        const email = emailInput.value;
        
        // Pega a data e hora atual
        const dataEnvio = new Date().toLocaleString();

        // Cria o objeto de usuário
        const novoUsuario = {
            nome: nome,
            email: email,
            dataEnvio: dataEnvio
        };

        // Carrega a lista de usuários existentes, adiciona o novo e salva
        const usuarios = carregarUsuarios();
        usuarios.push(novoUsuario);
        salvarUsuarios(usuarios);

        // Atualiza a lista na tela
        renderizarLista();

        // Limpa os campos do formulário após o cadastro
        nomeInput.value = '';
        emailInput.value = '';
    });

    // 6. Carrega a lista de usuários na primeira vez que a página é carregada
    renderizarLista();

    //CRITERIO 2 (0,5)
    /* (2,0) Função adequada para excluir um item da lista e do Local Storage. */


    // 7. Seleciona o botão de limpar
    const btnLimpar = document.getElementById('btn_limpar');

    // 8. Adiciona o evento de clique para limpar os campos
    btnLimpar.addEventListener('click', () => {
        nomeInput.value = '';
        emailInput.value = '';
    });

    //CRITERIO 3 (2,0)
    /* (1,0) Função adequada para excluir todos os itens da lista e do Local Storage. */


    // 9. Adiciona o evento de clique no container da lista
    listaUsuarios.addEventListener('click', (e) => {
        // Verifica se o clique foi em um botão com a classe 'btn_excluir'
        if (e.target.classList.contains('btn_excluir')) {
            // Pega o índice do usuário a ser excluído do atributo 'data-index'
            const indexParaExcluir = e.target.getAttribute('data-index');

            // Carrega a lista de usuários, remove o usuário e salva a lista atualizada
            const usuarios = carregarUsuarios();
            usuarios.splice(indexParaExcluir, 1); // Remove 1 elemento a partir do índice
            salvarUsuarios(usuarios);

            // Atualiza a lista na tela
            renderizarLista();
        }
    });

    //CRITÉRIO 4 (1,0)
    /* (2,0) Função adequada para pesquisar um campo do formulário. */

    // 10. Seleciona o botão de excluir todos
    const btnExcluirTodos = document.getElementById('btn_excluir_todos');

    // 11. Adiciona o evento de clique para excluir todos os usuários
    btnExcluirTodos.addEventListener('click', () => {
        // Limpa a chave 'usuarios' no Local Storage
        localStorage.removeItem('usuarios');
        // Atualiza a lista na tela (que agora estará vazia)
        renderizarLista();
    });

    //CRITERIO 5 (2,0)
    /* (0,5) Função adequada para limpar os campos do formulário. */

    // 12. Seleciona os elementos de pesquisa
        const inputPesquisa = document.getElementById('input_pesquisa');
        const btnPesquisar = document.getElementById('btn_pesquisar');

        // 13. Adiciona o evento de clique no botão de pesquisa
        btnPesquisar.addEventListener('click', () => {
            // Pega o termo de pesquisa e converte para letras minúsculas para facilitar a comparação
            const termoPesquisa = inputPesquisa.value.toLowerCase();
            
            // Carrega a lista completa de usuários
            const usuarios = carregarUsuarios();

            // Filtra os usuários que incluem o termo de pesquisa no nome ou e-mail
            const resultados = usuarios.filter(usuario => 
                usuario.nome.toLowerCase().includes(termoPesquisa) || 
                usuario.email.toLowerCase().includes(termoPesquisa)
            );

            // Limpa a lista atual no HTML
            listaUsuarios.innerHTML = '';
            
            // Renderiza apenas os resultados da pesquisa
            if (resultados.length > 0) {
                resultados.forEach((usuario, index) => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span>${usuario.dataEnvio} - Nome: ${usuario.nome}, E-mail: ${usuario.email}</span>
                        <button class="btn_excluir" data-index="${index}">Excluir</button>
                    `;
                    listaUsuarios.appendChild(li);
                });
            } else {
                // Mostra uma mensagem se não houver resultados
                listaUsuarios.innerHTML = '<li>Nenhum usuário encontrado.</li>';
            }
        });

    // Opcional: Adiciona um evento de input para a pesquisa ser dinâmica
    inputPesquisa.addEventListener('input', () => {
        const termoPesquisa = inputPesquisa.value.toLowerCase();
        const usuarios = carregarUsuarios();
        const resultados = usuarios.filter(usuario => 
            usuario.nome.toLowerCase().includes(termoPesquisa) || 
            usuario.email.toLowerCase().includes(termoPesquisa)
        );

        // Se o campo de pesquisa estiver vazio, renderiza a lista completa
        if (termoPesquisa === '') {
            renderizarLista();
        } else {
            // Senão, renderiza apenas os resultados da pesquisa
            listaUsuarios.innerHTML = '';
            if (resultados.length > 0) {
                resultados.forEach((usuario, index) => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span>${usuario.dataEnvio} - Nome: ${usuario.nome}, E-mail: ${usuario.email}</span>
                        <button class="btn_excluir" data-index="${index}">Excluir</button>
                    `;
                    listaUsuarios.appendChild(li);
                });
            } else {
                listaUsuarios.innerHTML = '<li>Nenhum usuário encontrado.</li>';
            }
        }
    });
});