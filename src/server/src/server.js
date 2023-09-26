const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
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
