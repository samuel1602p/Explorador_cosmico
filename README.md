# 🌌 Explorador Cósmico

Bem-vindo ao Explorador Cósmico, uma aplicação web de página única (Single Page Application) projetada para entusiastas da astronomia e curiosos sobre o universo. Este projeto funciona como uma enciclopédia dinâmica, permitindo que os usuários descubram e aprendam sobre diversos corpos celestes de forma interativa e com um design imersivo.

A interface foi cuidadosamente elaborada para simular uma viagem pelo espaço, com um fundo estrelado e animado que torna a experiência de navegação única.

<!-- Substitua o link abaixo pelo link do seu projeto hospedado no GitHub Pages -->
**[Clique aqui para ver a demonstração ao vivo!](https://samuel1602p.github.io/Explorador_cosmico/)**

## ✨ Funcionalidades Principais

*   **Busca Dinâmica:** Pesquise em tempo real por qualquer corpo celeste presente na base de dados. Os resultados são filtrados instantaneamente conforme você digita.
*   **Conteúdo Carregado de JSON:** Todos os dados sobre os corpos celestes (nomes, descrições, datas de descoberta, imagens e links) são carregados de forma assíncrona a partir de um arquivo `data.json`, tornando o projeto facilmente escalável e organizado.
*   **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente em desktops, tablets e smartphones.
*   **Interface Imersiva:**
    *   **Universo Estrelado:** Um fundo dinâmico com estrelas que piscam sutilmente, criado com HTML, CSS e JavaScript para uma imersão completa.
    *   **Cards Interativos:** Cada corpo celeste é apresentado em um "card" com informações essenciais. Ao passar o mouse, um efeito de destaque é aplicado.
*   **Links para Fontes Externas:** Cada card contém um link "Saiba mais" que direciona o usuário para fontes confiáveis (como a NASA e a ESA), incentivando um aprendizado mais aprofundado.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais, com foco em boas práticas e performance:

*   **HTML5:** Para a estruturação semântica do conteúdo.
*   **CSS3:** Para a estilização completa, incluindo:
    *   Layouts modernos com **Flexbox**.
    *   **Design Responsivo** com Media Queries.
    *   **Variáveis CSS (Custom Properties)** para um tema consistente e de fácil manutenção.
    *   Animações e transições para uma interface mais fluida.
*   **JavaScript (Vanilla):** Para toda a interatividade da página, incluindo:
    *   Manipulação do DOM para criar e exibir os cards dinamicamente.
    *   Consumo de dados do arquivo `data.json` utilizando a API `Fetch`.
    *   Implementação da lógica de busca e filtro.
    *   Geração do efeito de fundo estrelado.

## 📂 Estrutura do Projeto

```
/
├── index.html      # Arquivo principal da aplicação
├── style.css       # Folha de estilos
├── script.js       # Lógica de interatividade e manipulação de dados
├── data.json       # Banco de dados com as informações dos corpos celestes
└── img/            # Pasta com as imagens dos corpos celestes
```


## 🚀 Como Executar

Para executar o projeto localmente, siga estes passos simples:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/samuel1602p/Explorador-Cosmico-Interativo.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd Explorador-Cosmico-Interativo
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

E pronto! Você já pode começar a sua exploração cósmica.
