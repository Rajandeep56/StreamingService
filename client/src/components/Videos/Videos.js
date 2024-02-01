import "./Videos.scss";
import poster from "../../assets/images/posters/Brave.jpeg"

const Videos = () => {
    return (
      <section className="videos">
        <p className="videos__title">NEW AND NOTEWORTHY</p>
        <div className="videos__list">
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
          <img className="videos__poster" src={poster} alt="Movie Poster"></img>
        </div>
      </section>
    );
};

export default Videos;
