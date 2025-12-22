const Lista = require("../models/Lista");

module.exports = {
  // HOME
  home: async (req, res) => {
    const listas = await Lista.find();
    res.render("home", { title: "Home", listas });
  },

  // LISTAR LISTAS
  listarListas: async (req, res) => {
    const listas = await Lista.find();
    res.render("listas/index", { title: "Todas as Listas", listas });
  },

  // FORM NOVA LISTA
  formNovaLista: (req, res) => {
    res.render("listas/nova", { title: "Criar Nova Lista" });
  },

  // CRIAR LISTA
  criarLista: async (req, res) => {
    const nome = req.body.nome;

    if (!nome || !nome.trim()) {
      return res.redirect("/listas/nova");
    }

    await Lista.create({
      nome: nome.trim(),
      tarefas: [],
    });

    res.redirect("/listas");
  },

  // EXIBIR UMA LISTA
  exibirLista: async (req, res) => {
    const lista = await Lista.findById(req.params.id);

    if (!lista) {
      return res.status(404).send("Lista não encontrada");
    }

    res.render("listas/detalhes", {
      title: lista.nome,
      lista,
    });
  },

  // FORM NOVA TAREFA
  formNovaTarefa: async (req, res) => {
    const lista = await Lista.findById(req.params.id);

    if (!lista) {
      return res.status(404).send("Lista não encontrada");
    }

    res.render("tarefas/nova", {
      title: `Nova tarefa - ${lista.nome}`,
      lista,
    });
  },

  // CRIAR TAREFA
  criarTarefa: async (req, res) => {
    const lista = await Lista.findById(req.params.id);

    if (!lista) {
      return res.status(404).send("Lista não encontrada");
    }

    const nome = req.body.nome;

    if (!nome || !nome.trim()) {
      return res.redirect(`/listas/${lista._id}/tarefas/nova`);
    }

    lista.tarefas.push({
      nome: nome.trim(),
      concluida: false,
    });

    await lista.save();

    res.redirect(`/listas/${lista._id}`);
  },

  // CONCLUIR TAREFA
  concluirTarefa: async (req, res) => {
    const lista = await Lista.findById(req.params.id);

    if (!lista) {
      return res.status(404).send("Lista não encontrada");
    }

    const tarefa = lista.tarefas.id(req.params.tarefaId);

    if (!tarefa) {
      return res.status(404).send("Tarefa não encontrada");
    }

    tarefa.concluida = true;
    await lista.save();

    res.redirect(`/listas/${lista._id}`);
  },

  // EXCLUIR TAREFA
  excluirTarefa: async (req, res) => {
    const lista = await Lista.findById(req.params.id);

    if (!lista) {
      return res.status(404).send("Lista não encontrada");
    }

    lista.tarefas = lista.tarefas.filter(
      (t) => t._id.toString() !== req.params.tarefaId
    );

    await lista.save();

    res.redirect(`/listas/${lista._id}`);
  },

  // EXCLUIR LISTA
  excluirLista: async (req, res) => {
    await Lista.findByIdAndDelete(req.params.id);
    res.redirect("/listas");
  },
};
