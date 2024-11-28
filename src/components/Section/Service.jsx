import React from "react";
import auricular from "../../assets/images/auricular.png"
import scude from "../../assets/images/scude.png"
import secure from "../../assets/images/secure.png"
import "./styles/Section.css";

const data = [
  { id: 1, title: 'Awesome Support', image: auricular, text: 'Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.' },
  { id: 2, title: 'Analytics Security', image: scude, text: 'Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.' },
  { id: 3, title: 'Data Privacy', image: secure, text: 'Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.'}
]

const Service = ({ id }) => {
  return (
    <section id={id} className="section color-background">
      <div className="title">
        <h2>Our Services</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      <div className="container-section">
        {/* Text Content */}
        <div className="section-text-section-service">
          {data.map((value) => (
            <div key={value.id} className="section-text-service">
              <img
                src={value.image}
                alt="Business Illustration"
              />
              <div className="titleCard">{value.title}</div>
              <p>{value.text}</p>
              <div className="started">More information →</div>
            </div>
          ))}
        </div>
      </div >
    </section >
  );
};

export default Service;