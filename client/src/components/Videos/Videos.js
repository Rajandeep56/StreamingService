import "./Videos.scss";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from  "../Video/Video"
import { Link } from "react-router-dom";
const Videos = ({ commentsList,movieId }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/movies');
        setVideoList(response.data);
      } catch (error) {
        console.log('Failed to get data:', error);
      }
    };
    console.log(movieId);
    console.log()
    getData();
  }, []);

    if (videoList)
    return (
      <>
      <section className="videos">
        <p className="videos__title">NEW AND NOTEWORTHY</p>
        <div className="videos__list">
        {videoList.map((video) => {
          return (
            video.id !== commentsList.id && (
              <Link to={`/movies/${video.id}`}> <Video poster = {video.poster} title={video.title} key={video.id} movieId={commentsList.id}/></Link>
            )
          );
            })}
        </div>
      </section>
      </>
    );
};


export default Videos;
