import "./Videos.scss";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from  "../Video/Video"

const Videos = ({ commentsList }) => {

  const [videoList, setVideoList] = useState();
  // const [commentsList, setCommentsList] = useState([]);
  // const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/movies');
        setVideoList(response.data);
        // const commentsResponse = await axios.get(
        //   `http://localhost:8000/${movieId}`
        // );
        // setCommentsList(commentsResponse.data);
      } catch (error) {
        console.log('Failed to get data:', error);
      }
    };

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
            <Video poster = {video.poster} key={video.id}/>
            )
          );
            })}
        </div>
      </section>
      </>
    );
};


export default Videos;
