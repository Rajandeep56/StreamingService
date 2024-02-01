import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__section">
        <h1 className="hero__title">BRAVE</h1>
        <p className="hero__description">
          An impetuous but courageous daughter of Scottish King Fergus and Queen
          Elinor, is a skilled archer who wants to carve out her own path in
          life.
        </p>
        <div className="hero__container">
          <p className="hero__details">Walt Disney</p>
          <div className="hero__circle"></div>
          <p className="hero__details">2014</p>
          <div className="hero__circle"></div>
          <p className="hero__details">1hr 30min</p>
          <div className="hero__circle"></div>
          <p className="hero__details">93% match</p>
        </div>
        <div className="hero__bar"></div>
        <div className="hero__bar--scrub"></div>
        <button className="hero__button">Play Movie</button>
      </div>
    </section>
  );
}

export default Hero;
