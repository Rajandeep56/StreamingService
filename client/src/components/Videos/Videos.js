import "./Videos.scss";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import poster from "../../assets/images/posters/Brave.jpeg"

const Videos = () => {
  const [videoList, setVideoList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const videoResponse = await axios.get('http://localhost:8000/movies');
        setVideoList(videoResponse.data);
        const commentsResponse = await axios.get(
          `http://localhost:8000/${movieId}`
        );
        setCommentsList(commentsResponse.data);
      } catch (error) {
        console.log('Failed to get data:', error);
      }
    };

    getData();
  }, [movieId]);
    return (
      <section className="videos">
        <p className="videos__title">NEW AND NOTEWORTHY</p>
        <div className="videos__list">
        {videoList.map((video) => (
            <div key={video.id} >
          <img className="videos__poster" src={video.poster} width="80%" alt="Movie Poster"></img>
        </div>
        
        ))}
        </div>
      </section>
    );
};

export default Videos;
