# Streaming TV

#### A aplicação Streaming TV é um site fictício desenvolvido durante a formação back-end da Ada. O objetivo do projeto é colocar em prática as habilidades desenvolvidas durante o 5° módulo (Node.js com Express).
![Logo](https://live.staticflickr.com/65535/53543791400_1048840b2f_o.png)

---

> ⚙ Funcionalidades

- CRUDs das entidades User, Streaming e Card
- Validação e autenticação de usuários
- Upload e download de imagens
- Sistema de login
- Carrinho de compras
- Rotas públicas e privadas

---

> 🚀 Stack utilizada

**Back-end:**
`bcrypt`, `cors`, `dotenv`, `express`, `http-status-codes`, `jsonwebtoken`, `multer`, `sequelize`, `sqlite3`, `nodemon`, `prettier`, `ts-node`, `typescript`, `eslint`, `yup`.

**Front-end:**
`axios`, `bootstrap`, `react`, `react-bootstrap`, `react-dom`, `react-icons`, `react-router-dom`, `styled-components`, `eslint`, `typescript`, `vite`.

---

> 🔧 Instalação

1. Clone o projeto

    ```bash
    git clone https://github.com/GabrielaMoura25/Streaming-Ecommerce.git
    ```

2. Entre no diretório do projeto

    ```bash
    cd Streaming-Ecommerce
    ```

3. Acesse a pasta backend

    ```bash
    cd backend
    ```

4. Verifique se o Yarn está instalado

    ```bash
    yarn --version
    ```

5. Se não estiver instalado, execute o comando.

    ```bash
    npm install --global yarn
    ```

6. Instale as dependências

    ```bash
    yarn install
    ```

7. Crie um arquivo `.env` e configure as variáveis

    ```plaintext
    Antes de rodar o projeto, é necessário fazer uma cópia do arquivo '.example.env' e renomeá-lo para '.env'. Após fazer isso, adicione na variável 'PORT' a porta que irá rodar o projeto e em 'SECRET', adicione a sua chave secreta.
    ```

8. Execute o projeto

    ```bash
    yarn run dev
    ```

9. Após realizar a instalação das dependências do projeto no lado back-end, é necessário abrir uma nova janela/aba do terminal e acessar a pasta frontend. Após entrar na pasta frontend, execute os seguintes comandos:

    - Instale as dependências

    ```bash
    npm install
    ```

    - Execute o projeto

    ```bash
    npm run dev
    ```

10. Acesse o endereço

    ```plaintext
    http://localhost:5173/
    ```

---

> 🏆 Equipe

<table align="center">
  <tr align="center">
    <td>
      <a href="https://github.com/GabrielaMoura25">
        <img src="https://avatars.githubusercontent.com/u/104806754?v=4" width=100 />
        <p>Gabriela <br/>Moura</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/christianebs">
        <img src="https://avatars.githubusercontent.com/u/108686840?v=4" width=100 />
        <p>Christiane <br/>Barbosa</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/RubensLFerreira">
        <img src="https://avatars.githubusercontent.com/RubensLFerreira" width=100 />
        <p>Rubens <br/>Lima</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/JessanyKaline">
        <img src="https://avatars.githubusercontent.com/u/108687524?v=4" width=100 />
        <p>Jessany <br/>Kaline</p>
      </a>
    </td>
    <td>
      <a href="https://github.com/LeidyOlinto">
        <img src="https://avatars.githubusercontent.com/u/100310458?v=4" width=100 />
        <p>Leidy <br/>Olinto</p>
      </a>
    </td>
  </tr>
</table>
