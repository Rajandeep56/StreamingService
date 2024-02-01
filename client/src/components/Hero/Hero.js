import "./Hero.scss";

function Hero({ commentsList }) {
  // const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="hero">
      <div className="hero__section">
        <h1 className="hero__title">{commentsList.title}</h1>
        <p className="hero__description">{commentsList.description}</p>
          <div className="hero__container">
            <p className="hero__details">{commentsList.distributor}</p>
            <div className="hero__circle"></div>
            <p className="hero__details">{commentsList.year}</p>
            <div className="hero__circle"></div>
            <p className="hero__details">{commentsList.runtime}</p>
            <div className="hero__circle"></div>
            <p className="hero__details">{commentsList.rating}</p>
          </div>
        <div className="hero__bar"></div>
        <div className="hero__bar--scrub"></div>
        <button className="hero__button">
          Play Movie
        </button>
      </div>
    </section>
  );
}

export default Hero;
