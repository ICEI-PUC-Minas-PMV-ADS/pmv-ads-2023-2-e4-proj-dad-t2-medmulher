const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors({

  origin: "*", // Ou defina a origem permitida para um domínio específico
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"], // Defina os métodos HTTP permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Defina os cabeçalhos permitidos
  credentials: true, // Permitir o envio de cookies ou credenciais
}));

app.use(routes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.8qio1be.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Servidor mongoDB conectado!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

  // Login

  const User = mongoose.model('User', {
    email: String,
    password: String,
  });
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
  
    return res.status(200).json({ message: 'Login bem-sucedido' });
  });