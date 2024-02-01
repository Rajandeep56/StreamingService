import "./Videos.scss";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Hero from "../Hero/Hero"
import Video from  "../Video/Video"

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
      <>
      <section className="videos">
        <p className="videos__title">NEW AND NOTEWORTHY</p>
        <div className="videos__list">
        {videoList.map((video) => (
            <div key={video.id} >
            {/* <Hero title = {video.title}  description={video.description} year= {video.year} runtime= {video.runtime} rating={video.rating}/> */}
            { <Video poster = {video.poster}/>}
        </div>
        
        ))}
        </div>
      </section>
      </>
    );
};


export default Videos;
