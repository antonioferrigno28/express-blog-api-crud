// Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

// Ad esempio:
// Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
// Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
// e via dicendo…
// Registrare il router dentro app.js con il prefisso posts/.

// Bonus
// Provare a restituire la lista dei post dalla rotta index, in formato json
// Provare a restituire un singolo post dalla rotta show, sempre in formato json

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const router = express.Router();
const posts = require("../data/array");

// index
router.get("/", function (req, res) {
  res.json(posts);
});

// show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(418).json({ error: "Post non trovato, sono solo una teiera" });
  }
});

//store (create)
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

// update
router.put("/:id", (req, res) => {
  res.send("Modifica per intero dell'elemento " + req.params.id);
});

// destroy
router.delete("/:id", function (req, res) {
  res.send("Eliminazione del post " + req.params.id);
});

module.exports = router;
