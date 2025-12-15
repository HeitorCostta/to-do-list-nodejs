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

---

## 📂 Estrutura do Projeto

src/
├── controllers/
│ └── listasController.js
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

##🚀 Como Executar o Projeto

1 - Clone o repositório:
git clone https://github.com/HeitorCostta/to-do-list-nodejs.git

2 - Acesse a pasta do projeto:
cd to-do-list-nodejs

3 - Instale as dependências:
npm install

4 - Execute o projeto:
npm start

5 - Acesse no navegador:
http://localhost:3000

##📌 Observações

Os dados são armazenados em memória (sem banco de dados), com foco no aprendizado de backend e arquitetura MVC.

O projeto pode ser facilmente evoluído para usar banco de dados como MongoDB ou PostgreSQL.

## 👨‍💻 Autor

Desenvolvido por Heitor Costa
🔗 GitHub: https://github.com/HeitorCostta
