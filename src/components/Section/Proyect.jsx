import React from "react";
import hero3 from "../../assets/images/hero3.jpg"
import hero4 from "../../assets/images/hero4.jpg"
import hero5 from "../../assets/images/hero5.jpg"
import "./styles/Section.css";

const data = [
  { id: 1, title: 'Professional Designer', subtitle: 'UI/UX Designer', image: hero4 },
  { id: 2, title: 'Design Development', subtitle: 'REACT JS Developer', image: hero5 },
  { id: 3, title: 'Graphic Development', subtitle: 'Web Designer', image: hero3 },
  { id: 4, title: 'Design Development', subtitle: 'REACT JS Developer', image: hero5 },
  { id: 5, title: 'Graphic Development', subtitle: 'Web Designer', image: hero3 },
  { id: 6, title: 'Professional Designer', subtitle: 'UI/UX Designer', image: hero4 }
]

const Proyect = ({ id }) => {
  return (
    <section id={id} className="section">
      <div className="title">
        <h2>Our Latest Project</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      <div className="container-section">
        {/* Text Content */}
        <div className="section-text-section">
          {data.map((value) => (
            <div key={value.id} className="section-text images2">
              <img
                src={value.image}
                alt="Business Illustration"
              />
              <div className="titleCard">{value.title}</div>
              <div className="subtitleCard">{value.subtitle}</div>
            </div>
          ))}
        </div>
      </div >
    </section >
  );
};

export default Proyect;