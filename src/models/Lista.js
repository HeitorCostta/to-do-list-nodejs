const mongoose = require("mongoose");

const ListaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
tarefas: [
  {
    nome: {
      type: String,
      required: true,
    },
    concluida: {
      type: Boolean,
      default: false,
    },
  },
],
});

module.exports = mongoose.model("Lista", ListaSchema);
