const postsData = require("../data/array");

//index
function index(req, res) {
  const { tags, titolo } = req.query;

  let filteredPosts = [...postsData];

  if (tags) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(tags));
  }

  if (titolo) {
    filteredPosts = filteredPosts.filter(
      (post) => post.titolo.toLowerCase() === titolo.toLowerCase()
    );
  }

  res.json(filteredPosts);
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
  res.json("Creazione nuovo post");
}

//update
function update(req, res) {
  res.json("Modifica per intero dell'elemento " + req.params.id);
}

//destroy
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const post = postsData.find((post) => post.id === id);

  if (!post) {
    res.status(418).json({ error: "Post non trovato, sono solo una teiera" });
  }
  const postIndex = postsData.indexOf(post);

  postsData.splice(postIndex, 1);

  console.log(postsData);
  res.sendStatus(204);
}

module.exports = { index, show, store, update, destroy };
