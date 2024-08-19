# The New York Times API

Projeto desenvolvido para a avaliação das sprints 2 e 3 do programa de bolsas Compass UOL para formação em machine learning na AWS.

O objetivo do projeto é criar um sistema em Node.js que consome uma API pública externa e realiza o deploy na AWS dentro de um contêiner Docker.

A API escolhida foi a do The New York Times, onde o sistema permite buscar as notícias mais populares da semana, além de realizar pesquisas utilizando filtros.

![interface](https://live.staticflickr.com/65535/53930648062_34e371f9c7_h.jpg)

## Índices

1. [Tecnologias utilizadas](#tecnologias-utilizadas)
2. [Funcionalidades do Sistema](#funcionalidades-do-sistema)
3. [Desenvolvimento do Projeto](#desenvolvimento-do-projeto)
4. [Dificuldades Conhecidas](#dificuldades-conhecidas)
5. [Instalação e Execução](#instalação-e-execução)
6. [Deploy](#deploy)
7. [Equipe](#equipe)

## Tecnologias utilizadas

| Stack            | Tecnologias                             | 
| :--------------- | :-------------------------------------- |
| Back-end         | `Node.js`, `JavaScript`, `Express.js`   |
| Front-end        | `HTML`, `CSS`, `JavaScript`, `Bootstrap`| 
| Infraestrutura e DevOps | `AWS`, `Docker`                        | 

## Funcionalidades do Sistema

1. A tela principal da aplicação exibe de forma dinâmica as notícias mais importantes da semana na seção *News of the week*.
![interface](https://live.staticflickr.com/65535/53932267774_4fa45362c2_h.jpg)

2. Acima da seção *News of the week*, há uma área de pesquisa com filtros, onde é possível filtrar por data, ordenar ou pesquisar sem filtros.
![interface](https://live.staticflickr.com/65535/53932382770_fd533b8406_h.jpg)

## Desenvolvimento do Projeto

### Organização da equipe
A equipe se organizou utilizando a ferramenta `Trello`, seguindo a metodologia ágil `SCRUM`. Durante as reuniões, as tarefas eram criadas e distribuídas de forma dinâmica, onde cada membro escolhia sua própria tarefa. Após a conclusão, o membro fazia o *push* para o GitHub utilizando `Commits semânticos` para manter a organização do repositório.

[Link para o quadro da equipe no Trello](https://trello.com/invite/b/66a8dac8d51e1e89f636352d/ATTIe40537a430a2fbf44538e3dae1622ad0C46474B5/compass-pb-aws-2024-julho-a-sprints-2-3-pb-aws-julho-a)

### Desenvolvimento da camada Back-end
O Back-end foi desenvolvido com base na `Layered Architecture` (Arquitetura em Camadas) para manter uma organização clara e separar as responsabilidades. As camadas têm os seguintes papéis:

- **Controller:** Responsável por lidar com as requisições **HTTP**.
- **Service:** Responsável pela **lógica de negócios**, consulta e retorno de dados ao controller.
- **Validate:** Responsável por validar os **dados de entrada** para o service.
- **CustomError:** Criação de **erros personalizados** para lidar com respostas HTTP.
- **Routes:** Responsável pelo controle das **rotas de acesso**.
- **server.js:** Arquivo responsável por **iniciar, comunicar e executar** a aplicação.

[Link para CustomError](https://javascript.info/custom-errors)

### Desenvolvimento da camada Front-end
O desenvolvimento do Front-end foi baseado em uma arquitetura simples em `Vanilla`. A estrutura do Front-end está dividida em três partes principais: **index.html**, **css**, e **js**.

- **index.html:** Responsável por **renderizar a página inicial** da aplicação com `Bootstrap`.
- **js:** Contém as seguintes pastas:
    - **articlePopular:** Envia requisições à API local e popula os cards com as notícias populares.
    - **articleSearch:** Também envia requisições à API local e preenche os cards com os artigos correspondentes.
    - **config:** Centraliza informações úteis que podem ser utilizadas no Front-end.
    - **main.js:** Arquivo responsável por **iniciar as requisições** para exibir as notícias da semana nos cards.
- **css:** Responsável pela **estilização da página**.
- **assets:** Contém todos os **arquivos estáticos** da aplicação.

### Arquivos de configuração
Para padronizar o projeto, utilizamos o `eslint` configurado com `prettier`. Também utilizamos `Dockerfile` e `docker-compose` para containerizar a aplicação. Além disso, criamos uma pasta `.vscode` para que todos os membros da equipe tivessem indicações de extensões adequadas para o desenvolvimento do projeto.

## Dificuldades Conhecidas

- Dificuldade em manter as contribuições organizadas, evitando conflitos no GitHub.
- Falta de conhecimento prático em determinadas tecnologias, como Docker e AWS.
- Dificuldade em conciliar as aulas de estágio com o desenvolvimento do projeto.

## Instalação e Execução

1. Abra o terminal.
2. Acesse o diretório onde deseja clonar o projeto.
3. Execute o seguinte comando no terminal:

```bash
    git clone https://github.com/Compass-pb-aws-2024-JULHO-A/sprints-2-3-pb-aws-julho-a.git
```

4. Acesse a pasta clonada:

```bash
    cd sprints-2-3-pb-aws-julho-a
```

**Executando em ambiente de desenvolvimento**

5. Instale as dependências:

```bash
    npm install
```

6. Inicie a aplicação:

```bash
    npm run dev
```

7. Abra o arquivo `index.html`. Uma forma de fazer isso é utilizando a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ou acessando o link:

```bash
    http://127.0.0.1:5500/public/index.html
```

**Executando com Docker**

8. Comando para fazer o build e iniciar os contêineres com Docker Compose:

```bash
    docker-compose up --build
```

## Deploy

[Link para acessar o deploy da aplicação](http://127.0.0.1:5500/public/index.html)

## Equipe
<table align="center">
  <tr align="center">
    <td>
      <a href="https://github.com/RubensLFerreira">
        <img src="https://avatars.githubusercontent.com/RubensLFerreira" width=100 />
        <p>Rubens <br/>Lima</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/Caiqueferlima">
        <img src="https://avatars.githubusercontent.com/u/130234796?v=4" width=100 />
        <p>Caíque <br/>Fernandes</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/devrodrigocsoares">
        <img src="https://avatars.githubusercontent.com/u/63052661?v=4" width=100 />
        <p>Rodrigo <br/>Cadeira</p>
      </a>
    </td>
      <td>
      <a href="https://github.com/Ivo-Aragao">
        <img src="https://avatars.githubusercontent.com/u/105293872?v=4" width=100 />
        <p>Ivo <br/>Aragão</p>
      </a>
    </td>
  </tr>
</table>
