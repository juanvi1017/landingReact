import React from "react";
import hero from "../../assets/images/hero-img2.png"
import "./styles/Section.css";


const About = ({ id }) => {
  return (
    <section id={id} className="section">
      <div className="title">
        <h2>About Us</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      <div className="container-section">
        {/* Text Content */}
        <div className="section-text-section">
          <div className="section-text">
            <h1>
              Productive & Customizable For <span>Developers</span> <br />
            </h1>
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.</p>
            <p>
              <li>Marketing program activities</li>
              <li>Customization product</li>
              <li>At vero eos accusamus iusto</li>
            </p>
            <div className="started">More information →</div>
          </div>
          <div className="section-text">
            <img
              src={hero}
              alt="Business Illustration"
            />
            <div className="subtitleCard">Development</div>
            <div className="titleCard">Product Development</div>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.</p>
            <div className="started">More information →</div>
          </div>
          <div className="section-text">
            <img
              src={hero}
              alt="Business Illustration"
            />
            <div className="subtitleCard">Marketing</div>
            <div className="titleCard">Marketing Product</div>
            <p>Temporibus autem quibusdam a officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
            <div className="started">More information →</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;