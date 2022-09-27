const express = require("express");
const mongoose = require("mongoose");// para coenct a la base de datos
require("dotenv").config();// para crar y acceder a variabls de ambiete customizadas
const userRoute = require("./routes/user");

// settings
const app = express();
const port = process.env.PORT || 9000; //variable del puerto que vayamos a usar con varibale de ambiente para el puerto que nos da un servicio o sino el que le ponemos 

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
  res.send("CON USTEEEEEDEEEEESSSSSSSSSS ........... mi API ");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Estas conectado a MongoDB Atlas "))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("El servidor esta escuchando el puerto: ", port));