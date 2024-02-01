const express = require("express");
const router = express.Router();

const { fetchMovies, addMovie } = require("../controllers/movies");
// routing scaffolding ends here

// const movieData = require("../data/movies.json")
// router.get("/",(req,res)=> {})


router.route("/")
  .get((req, res) => {
    const movieList = fetchMovies();
    const noIds = movieList.map(movie => { 
      return {
        title: movie['title'], 
        description:movie['description'],
        distributor: movie['distributor'],
        year: movie['year'],
        runtime: movie['runtime'],
        rating: movie['rating'],
        poster: movie['poster'],
        background: movie['background']
      }});
    res.status(200).json(noIds);
  })
  

router.route("/:id")
  .get((req, res) => {
    //const id = req.params.id;
    const { id } = req.params;
    const movieMatch = fetchMovies().find((movie) => movie.id == id);
    if(!movieMatch) return res.status(404).json("No movie with that ID");
    res.status(200).json(movieMatch);
  })
  .delete((req, res) => {

  })

router.delete("/all",(req,res) => {

})

// little more routing scaffolding
module.exports = router;