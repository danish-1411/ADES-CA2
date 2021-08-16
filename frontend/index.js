// Name      : Mohd Danish Shafiq
// Class     : DIT 2B22
// Admin no. : p2043483

//---------------------------------------------------------------------
// imports
//---------------------------------------------------------------------
const express = require("express");
const app = express();

//---------------------------------------------------------------------
// Endpoints
//---------------------------------------------------------------------

app.get("/", (req, res) => {
  res.sendFile("/website/home.html", { root: __dirname });
});

app.get("/create", (req, res) => {
  res.sendFile("/website/create.html", { root: __dirname });
});

app.get("/questions", (req, res) => {
  res.sendFile("/website/questions.html", { root: __dirname });
});

app.get("/question", (req, res) => {
  res.sendFile("/website/viewQuestion.html", { root: __dirname });
});

//---------------------------------------------------------------------
// configuration
//---------------------------------------------------------------------
const PORT = 3001;

//---------------------------------------------------------------------
// mains
//---------------------------------------------------------------------
// start the server and start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Client server has started listening on port ${PORT}`);
});
