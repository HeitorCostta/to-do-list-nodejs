# 📝 To-Do List — Node.js + Express

Aplicação de **gerenciamento de listas e tarefas** desenvolvida com Node.js, Express, EJS e Bootstrap, seguindo o padrão MVC.

O projeto permite criar listas, adicionar tarefas, concluir e excluir tarefas, além de excluir listas.

---

## 🚀 Funcionalidades

- Criar listas de tarefas
- Visualizar todas as listas
- Excluir listas
- Adicionar tarefas a uma lista
- Concluir tarefas
- Excluir tarefas
- Interface estilizada com Bootstrap
- Layout reutilizável com EJS (partials)

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **EJS**
- **Bootstrap 5**
- **JavaScript**
- **HTML / CSS**
- **Git & GitHub**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv** 
---

## 📂 Estrutura do Projeto

src/
├── config/
│ └── database.js
├── controllers/
│ └── listasController.js
├── models/
│ └── Lista.js
├── routes/
│ └── router.js
├── views/
│ ├── partials/
│ │ └── layout.ejs
│ ├── listas/
│ │ ├── index.ejs
│ │ ├── nova.ejs
│ │ └── detalhes.ejs
│ ├── tarefas/
│ │ └── nova.ejs
│ └── home.ejs
├── public/
│ └── css/
│ └── styles.css
├── app.js

## 🔐 Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para conexão com o banco de dados.

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

MONGO_URI=sua_string_de_conexao_do_mongodb

⚠️ O arquivo `.env` não é versionado por questões de segurança.


## ▶️ Como Executar o Projeto

1 - Clone o repositório:
git clone https://github.com/HeitorCostta/to-do-list-nodejs.git

2 - Acesse a pasta do projeto:
cd to-do-list-nodejs

3 - Instale as dependências:
npm install

4 - Configure o arquivo `.env` com sua conexão do MongoDB

5 - Execute o projeto:
npm start

6 - Acesse no navegador:
http://localhost:3000


##📌 Observações

## 📌 Observações

- Os dados agora são persistidos utilizando MongoDB Atlas.
- O projeto segue o padrão MVC.
- As tarefas são armazenadas como subdocumentos dentro da lista.
- Projeto com foco em aprendizado de backend e boas práticas.


## 👨‍💻 Autor

Desenvolvido por Heitor Costa
🔗 GitHub: https://github.com/HeitorCostta
