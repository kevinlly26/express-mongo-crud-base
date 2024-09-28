# CRUD de Itens com Node.js e Express

Este projeto é um CRUD simples (Create, Read, Update, Delete) para gerenciar itens utilizando Node.js, Express e MongoDB. O objetivo é fornecer uma API RESTful para manipulação de dados de itens.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework para Node.js que simplifica a criação de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: Biblioteca para modelagem de dados em MongoDB com Node.js.

## Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB instalado e rodando localmente

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/kevinlly26/express-mongo-crud-base.git
   cd my-crud-app

2. Instale as dependências:

   ```bash
   npm install 

3. Atualize o arquivo .env na raiz do projeto e adicione a sua configuração do mongo:

   ```bash
   MONGO_URI=mongodb://localhost:27017/seulocal

### Executando a Aplicação

Para iniciar a aplicação (A aplicação estará disponível em http://localhost:5000), execute:

   ```bash
   node src/app.js
