const mongoose = require("mongoose");

const ListaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  tarefas: [
    {
      titulo: String,
      concluida: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model("Lista", ListaSchema);
