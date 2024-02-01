// SCAFFOLDING NEEDED FOR ANY EXPRESS APP
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const PORT = process.env.PORT

const moviesRoutes = require("./routes/movies");

const { PORT } = process.env;

const trackingData = [];

app.use(cors());
app.use(express.json());
// END SCAFFOLDING


app.use((req, res, next) => {
    trackingData.push(Date.now());
    req.numberOfVisits = trackingData;
    req.isSimaCool = "Yes indeed!";
    next();
  })

app.use("/movies", moviesRoutes); // use middleware to handle imported routes


// MORE SCAFFOLDING / BOILERPLATE
app.listen(PORT || 8000, () => {
    console.log(`Running on ${PORT || 8000}`)
  })
  // END SCAFFOLDING