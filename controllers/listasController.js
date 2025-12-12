// controllers/listasController.js

// Simples armazenamento em memória (para aprender; depois troca por DB)
let listas = [
  {
    id: 1,
    nome: "Compras",
    tarefas: [
      { id: 1, nome: "Leite", concluida: false },
      { id: 2, nome: "Pão", concluida: true },
    ],
  },
  {
    id: 2,
    nome: "Estudos",
    tarefas: [{ id: 1, nome: "Revisar Node", concluida: false }],
  },
];

module.exports = {
  home: (req, res) => {
    // Renderiza a home (views/home.ejs)
    res.render("home", { title: "Home", listas });
  },

  listarListas: (req, res) => {
    // Renderiza a página que mostra todas as listas
    res.render("listas/index", { title: "Todas as Listas", listas });
  },

  formNovaLista: (req, res) => {
    // Renderiza formulário para criar nova lista
    res.render("listas/nova", { title: "Criar Nova Lista" });
  },

  criarLista: (req, res) => {
    // Recebe dados do formulário via req.body
    const nome = req.body.nome;
    if (!nome || !nome.trim()) {
      return res.redirect("/listas/nova");
    }
    const nova = {
      id: Date.now(), // id simples (não usado em produção)
      nome: nome.trim(),
      tarefas: [],
    };
    listas.push(nova);
    res.redirect("/listas");
  },

  exibirLista: (req, res) => {
    const id = Number(req.params.id);
    const lista = listas.find((l) => l.id === id);
    if (!lista) {
      return res.status(404).send("Lista não encontrada");
    }
    res.render("listas/detalhes", { title: lista.nome, lista });
  },

  formNovaTarefa: (req, res) => {
    const id = Number(req.params.id);
    const lista = listas.find((l) => l.id === id);
    if (!lista) return res.status(404).send("Lista não encontrada");
    res.render("tarefas/nova", { title: `Nova tarefa - ${lista.nome}`, lista });
  },

  criarTarefa: (req, res) => {
    const id = Number(req.params.id);
    const lista = listas.find((l) => l.id === id);
    if (!lista) return res.status(404).send("Lista não encontrada");

    const nome = req.body.nome;
    if (!nome || !nome.trim()) {
      return res.redirect(`/listas/${id}/tarefas/nova`);
    }
    const novaTarefa = {
      id: Date.now(),
      nome: nome.trim(),
      concluida: false,
    };
    lista.tarefas.push(novaTarefa);
    res.redirect(`/listas/${id}`);
  },

  concluirTarefa: (req, res) => {
    const id = Number(req.params.id);
    const tarefaId = Number(req.params.tarefaId);
    const lista = listas.find((l) => l.id === id);
    if (!lista) return res.status(404).send("Lista não encontrada");

    const tarefa = lista.tarefas.find((t) => t.id === tarefaId);
    if (!tarefa) return res.status(404).send("Tarefa não encontrada");

    tarefa.concluida = true;
    res.redirect(`/listas/${id}`);
  },

  excluirTarefa: (req, res) => {
    const id = Number(req.params.id);
    const tarefaId = Number(req.params.tarefaId);
    const lista = listas.find((l) => l.id === id);
    if (!lista) return res.status(404).send("Lista não encontrada");

    lista.tarefas = lista.tarefas.filter((t) => t.id !== tarefaId);
    res.redirect(`/listas/${id}`);
  },

  excluirLista: (req, res) => {
    const id = Number(req.params.id);

    // Verifica se existe
    const existe = listas.some((l) => l.id === id);
    if (!existe) {
      return res.status(404).send("Lista não encontrada");
    }

    // Remove
    listas = listas.filter((l) => l.id !== id);

    // Redireciona pra página principal de listas
    res.redirect("/listas");
  },
};
