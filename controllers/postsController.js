const postsData = require("../data/array");

//index
function index(req, res) {
  res.json(postsData);
}

//show
function show(req, res) {
  const id = parseInt(req.params.id);

  const post = postsData.find((post) => post.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(418).json({ error: "Post non trovato, sono solo una teiera" });
  }
}

//store (create)
function store(req, res) {
  res.send("Creazione nuovo post");
}

//update
function update(req, res) {
  res.send("Modifica per intero dell'elemento " + req.params.id);
}

//destroy
function destroy(req, res) {
  res.send("Eliminazione del post " + req.params.id);
}

module.exports = { index, show, store, update, destroy };
