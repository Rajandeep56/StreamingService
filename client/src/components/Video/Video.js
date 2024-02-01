import "./Video.scss";
import poster from "../../assets/images/posters/Brave.jpeg"


const Video = ({poster}) => {
  return (
    <img
      className="videos__poster"
      src={poster}
      width="80%"
      alt="Movie Poster"
    ></img>
  );
};

export default Video;
