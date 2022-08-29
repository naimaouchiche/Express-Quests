const express = require("express");
require("dotenv").config();

const { validateMovie, validateUser } = require("./validator.js");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

//GET

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");


// GET

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

// POST

app.post("/api/movies", movieHandlers.postMovie);
app.post("/api/users", userHandlers.postUser);
 app.post("/api/movies", validateMovie, movieHandlers.postMovie);
 app.post("/api/users", validateUser, userHandlers.postUser);
// PUT

app.put("/api/movies/:id", movieHandlers.updateMovie);
app.put("/api/users/:id", userHandlers.updateUser);
app.put("/api/movies", validateMovie, movieHandlers.updateMovie);
app.put("/api/users", validateUser, userHandlers.updateUser);

//DELETE

app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.delete("/api/users/:id", userHandlers.deleteUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
