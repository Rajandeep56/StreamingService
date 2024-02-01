import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Videos from "../../components/Videos/Videos";
import Header from "../../components/Header/Header";


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  // const [commentsList, setCommentsList] = useState([]);
   const {movieId}  = useParams();

  const [commentsList, setCommentsList] = useState([]);
  console.log(movieId)
 

  useEffect(() => {
    const getData = async (movieId) => {
      try {
        const response = await axios.get(
          `http://localhost:8000/movies/${movieId}`
          );
          setCommentsList(response.data);
          
      }
      catch (error) {
        console.log("Failed to get data:", error);
    }}
   
    if (movieId) {
      getData(movieId);
    } else {
    getData("1");
    }
  }, [movieId]);

  if (commentsList) {
  return (
    <>
          <section className="app" style={{backgroundImage:`url(${commentsList.background})`}}/>

    <main className="main">
    <Header />
      <Hero commentsList={commentsList} />
      <Videos commentsList={commentsList} movieId={movieId}/>
    </main>
    </>
  );
}
  return "Loading";
}

export default HomePage;
