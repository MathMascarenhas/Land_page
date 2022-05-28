const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

let message = "";

app.get("/", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];

    setTimeout(() => {
      message = "";
    }, 1000);

    res.render("index", { titulo: "Blue", devList: devList, analyticsList: analyticsList, message});
});

app.post("/subscription", (req, res) => {
   const {nome, email} = req.body; 
   message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
   res.redirect("/");
});

app.listen(port, () => {
  console.log(`Servidor rodado em http://localhost:${port}`)}
  );