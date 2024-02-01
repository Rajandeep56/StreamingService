import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Videos from "../../components/Videos/Videos";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomePage() {
  // const [commentsList, setCommentsList] = useState([]);
  const { movieId } = useParams();

  const [commentsList, setCommentsList] = useState();

  const getData = async (movieId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/movies/${movieId}`
        );
        setCommentsList(response.data)
    }
    catch (error) {
      console.log("Failed to get data:", error);
  }}

  useEffect(() => {
    // const getData = async (movieId) => {
    //   try {
    //     // const videoResponse = await axios.get('http://localhost:8000/movies');
    //     // setVideoList(videoResponse.data);
    //     const response = await axios.get(
    //       `http://localhost:8000/movies/${movieId}`
    //     );
    //     setCommentsList(response.data);
    //   } catch (error) {
    //     console.log("Failed to get data:", error);
    //   }
    // };
    if (movieId) {
      getData(movieId);
    } else {
    getData("1");
    }
  }, [movieId]);

  if (commentsList) {
  return (
    <main className="main">
      <Hero commentsList={commentsList} />
      {/* <Hero title = {video.title}  description={video.description} year= {video.year} runtime= {video.runtime} rating={video.rating}/> */}
      <Videos commentsList={commentsList} movieId={movieId}/>
    </main>
  );
}
  return "Loading";
}

export default HomePage;
