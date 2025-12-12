// routes/router.js
const express = require("express");
const router = express.Router();
const listasController = require("../controllers/listasController");

// Página inicial
router.get("/", listasController.home);

// Rotas de listas
router.get("/listas", listasController.listarListas);
router.get("/listas/nova", listasController.formNovaLista);
router.post("/listas", listasController.criarLista);
router.get("/listas/:id", listasController.exibirLista); // Rotas de tarefas (dentro da lista)
router.get("/listas/:id/tarefas/nova", listasController.formNovaTarefa);
router.post("/listas/:id/tarefas", listasController.criarTarefa);
router.post(
  "/listas/:id/tarefas/:tarefaId/concluir",
  listasController.concluirTarefa
);
router.post(
  "/listas/:id/tarefas/:tarefaId/excluir",
  listasController.excluirTarefa
);
router.post("/listas/:id/excluir", listasController.excluirLista);

module.exports = router;
