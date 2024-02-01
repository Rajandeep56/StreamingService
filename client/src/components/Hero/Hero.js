import React, { useState } from "react";
import "./Hero.scss";

function Hero({ title, description, year, runtime, rating }) {
  const [showDetails, setShowDetails] = useState(false);

  

  return (
    <section className={`hero ${showDetails ? "hero--expanded" : ""}`}>
      <div className="hero__section">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{showDetails ? "New Description" : description}</p>
        {showDetails && (
          <div className="hero__container">
            <p className="hero__details">{title}</p>
            <div className="hero__circle"></div>
            <p className="hero__details">{year}</p>
            <div className="hero__circle"></div>
            <p className="hero__details">{runtime}</p>
            <div className="hero__circle"></div>
            <p className="hero__details">{rating}</p>
          </div>
        )}
        <div className="hero__bar"></div>
        <div className="hero__bar--scrub"></div>
        <button className="hero__button" >
          Play Movie
        </button>
      </div>
    </section>
  );
}

export default Hero;
