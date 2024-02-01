const fs = require("fs");

const fetchMovies = () => {
  return JSON.parse(fs.readFileSync("./data/movies.json"));
}

const addMovie = (newMovie) => {
  const freshMovieList = fetchMovies();
  // freshMovieList.push(newMovie);
  // fs.writeFileSync("../data/movies.json", JSON.stringify(freshMovieList));
  fs.writeFileSync("./data/movies.json", JSON.stringify([...freshMovieList, newMovie]));
  return newMovie;
}

module.exports = { fetchMovies, addMovie }