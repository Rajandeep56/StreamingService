import "./Video.scss";
import { Link } from "react-router-dom";

// import poster from "../../assets/images/posters/Brave.jpeg"


const Video = ({poster}) => {
  return (
    <Link to={`/${poster.id}`}>
    <img
      className="videos__poster"
      src={poster}
      width="80%"
      alt="Movie Poster"
    ></img>
    </Link>
  );
};

export default Video;
