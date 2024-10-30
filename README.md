# SEC 2024 - Curso de React

Este repositório visa o armazenamento de códigos e materiais de estudo do curso de React da SEC 2024 feito por mim.

<img src="docs/images/summary.png" alt="Summary" width="100%">

## 📝 Notion

Aqui você pode encontrar uma descrição bem mais detalhada sobre o projeto e a instalação ou desenvolvimento do mesmo.
[Abrir instruções no Notion](https://abnerjs.notion.site/React-SEC2024-104aee7bea3c8043b2d9c3cfcadc5aba)

## 💻 Figma

Aqui você pode encontrar informações sobre o protótipo e o guia de estilos.
[Abrir protótipo no Figma](https://linky.design/react2024)

## 🚀 Instruções

Inb4: Faça um fork do repositório para a sua conta do GitHub.

#### Primeiros passos

- Clone o repositório para a sua máquina.
- Abra o terminal na pasta do projeto e execute o comando `npm install` para instalar as dependências.

#### Banco de dados

- O banco de dados utilizado é o PostgreSQL. Este é usado pela [Neon.tech](https://neon.tech/) onde criaremos um banco de dados para o projeto.
- Crie seu banco de dados e substitua as informações de conexão no arquivo `server/.env`.

#### Backend

- Entre na pasta `server` (`cd server`) e execute o comando `npm install` para instalar as dependências.
- Execute o comando `npx drizzle-kit generate` para criar o arquivo com os comandos PostgreSQL.
- Execute o comando `npx drizzle-kit migrate` para criar o banco de dados e as tabelas.
- Execute o comando `npm run seed` para popular o banco de dados com dados de teste.
- Execute o comando `npm run dev` para iniciar o servidor.

#### Frontend

- Entre na pasta `client` (`cd ..` e depois `cd client`) e execute o comando `npm install` para instalar as dependências.
- Execute o comando `npm run dev` para iniciar o servidor.
