import React from "react";
import hero from "../../assets/images/hero-img.png"
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* Text Content */}
        <div className="hero-text">
          <h1>
            Hello, <br />
            <span>We Help You To Boost Your Business</span>
          </h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            sequi nesciunt.
          </p>
          <button className="btn">Get Started →</button>
        </div>

        {/* Illustration */}
        <div className="hero-image">
          <img
            src={hero}
            alt="Business Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;