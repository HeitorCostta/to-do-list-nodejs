require("dotenv").config();
const connectDB = require("./config/database");

const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const router = require("./routes/router.js");
const expressLayouts = require("express-ejs-layouts");

// Configurações
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// ATIVA LAYOUTS
app.use(expressLayouts);

// DEFINE O LAYOUT PADRÃO
app.set("layout", "partials/layout");
// Rotas
app.use("/", router);

// Conecta ao banco de dados
connectDB();

// Servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
