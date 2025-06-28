# 🌱 EcoVida - Conscientização Sustentável

O **EcoVida** é um site informativo e educativo sobre práticas sustentáveis, reaproveitamento de materiais e consumo consciente. Desenvolvido como parte de um projeto acadêmico, seu objetivo é conscientizar as pessoas sobre a importância da preservação ambiental e apresentar dicas práticas para um dia a dia mais ecológico.

---

## 📌 Funcionalidades

- Página inicial com navegação amigável
- Sessão de **EcoDicas** com sugestões sustentáveis
- Página sobre **Reaproveitamento** de materiais
- Seção de **Sobre** com informações e Currículo Vitae
- Layout agradável
- Links para login e cadastro entre outras
- Logo feita com IA
- Imagens baixadas livres de direitos autorais

### ⚙️ Funcionalidades de Administração (Nova!)

A página de administração (`admin.html`) permite o gerenciamento de usuários. Para acessá-la, utilize as seguintes credenciais de administrador:

* **E-mail**: `admin@admin`
* **Senha**: `admin`

Uma vez logado, o administrador pode:

* **Cadastrar Novos Usuários**: Inserir nome, e-mail e uma senha para novos usuários, que poderão usar essas credenciais para acessar o site.
* **Pesquisar Usuários**: Filtrar a lista de usuários por nome ou e-mail.
* **Excluir Usuários**: Remover usuários individualmente da lista.
* **Excluir Todos os Usuários**: Limpar toda a base de dados de usuários.

### 📝 Exemplos de Cadastro

#### Cadastro Comum:

* **Usuário: Ana Silva**

    * Nome completo: Ana Silva
    * E-mail: ana.silva@hotmail.com
    * Senha: 123
    * Confirmar senha: 123
    * Data de nascimento: 15/05/1998
* **Usuário: Bruno Costa**

    * Nome completo: Bruno Costa
    * E-mail: bruno@hotmail.com
    * Senha: 456
    * Confirmar senha: 456
    * Data de nascimento: 22/11/2000

#### Cadastro Admin:

* **Usuário: Carlos Pereira**

    * Nome do Usuário: Carlos Pereira
    * E-mail: carlos@gmail.com
    * Senha: carlos
* **Usuário: Diana Santos**

    * Nome do Usuário: Diana Santos
    * E-mail: diana@gmail.com
    * Senha: diana

### 🚀 Alterações e Melhorias

Esta versão do projeto inclui melhorias significativas na experiência do usuário e na administração:

* **Redirecionamento Inteligente**: O botão "Comece Agora" na página inicial agora redireciona para a página de cadastro (`cadastro.html`) para novos usuários e para a página de EcoDicas (`ecodicas.html`) para usuários já logados.
* **Carrossel Automático de Imagens**: As imagens na página inicial (`index.html`) agora se alternam automaticamente em um carrossel, proporcionando uma experiência visual mais dinâmica.
* **Gerenciamento de Usuários com Senha**: A página de administração foi aprimorada para que o administrador possa cadastrar novos usuários, definindo uma senha para cada um. As informações são armazenadas no `localStorage` do navegador.
* **Melhoria na Navegação**: A visibilidade dos links do cabeçalho (`EcoDicas` e `Reaproveitamento`) agora é controlada de forma mais eficiente, garantindo que o link "Sobre" permaneça sempre visível.

---

## 🖼️ Logo EcoVida

![Logo EcoVida](images/logo_ecovida.png)

---

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Local Storage (para armazenamento de dados)

## 📁 Estrutura de pastas

```bash
EcoVida/
├── css/
│   ├── cabecalho.css
│   ├── cadastro.css
│   ├── ecodicas.css
│   ├── index.css
│   ├── login.css
│   ├── reaproveitamento.css
│   ├── reset.css
│   └── rodape.css
├── images/
│   ├── broto.jpg
│   ├── desmatamento.jpg
│   ├── lampada_ecologica.jpg
│   ├── logo_ecovida.png
│   ├── logo_github.jpg
│   ├── natureza_arvores.jpg
│   ├── ods12.png
│   └── reduce_use_cycle.png
├── js/
│   ├── admin.js
│   ├── cadastro.js
│   ├── check-login.js
│   ├── index.js
│   └── login.js
├── admin.html
├── cadastro.html
├── ecodicas.html
├── index.html
├── login.html
├── reaproveitamento.html
└── README.md