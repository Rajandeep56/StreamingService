import "./Video.scss";
import { Link } from "react-router-dom";

// import poster from "../../assets/images/posters/Brave.jpeg"


const Video = ({poster}) => {
  return (
    
    
    <img
      className="videos__poster"
      src={poster}
      width="80%"
      alt="Movie Poster"/>
    
   

  );
};

export default Video;
