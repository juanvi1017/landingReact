import React from "react";
import hero from "../../assets/images/hero-img2.png"
import hero3 from "../../assets/images/hero3.jpg"
import hero4 from "../../assets/images/hero4.jpg"
import hero5 from "../../assets/images/hero5.jpg"
import contact from "../../assets/images/contact.png"
import "./About.css";

const data = [
  { id: 1, title: 'Professional Designer', subtitle: 'UI/UX Designer', image: hero4 },
  { id: 2, title: 'Design Development', subtitle: 'REACT JS Developer', image: hero5 },
  { id: 3, title: 'Graphic Development', subtitle: 'Web Designer', image: hero3 },
  { id: 4, title: 'Design Development', subtitle: 'REACT JS Developer', image: hero5 },
  { id: 5, title: 'Graphic Development', subtitle: 'Web Designer', image: hero3 },
  { id: 6, title: 'Professional Designer', subtitle: 'UI/UX Designer', image: hero4 }
]

const About = () => {
  return (
    <section className="about">
      <div className="title">
        <h2>About Us</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      <div className="container-about">
        {/* Text Content */}
        <div className="about-text-section">
          <div className="about-text">
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
          <div className="about-text">
            <img
              src={hero}
              alt="Business Illustration"
            />
            <div className="subtitleCard">Development</div>
            <div className="titleCard">Product Development</div>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.</p>
            <div className="started">More information →</div>
          </div>
          <div className="about-text">
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
        <div className="about-text-section">
          {data.map((value) => (
            <div key={value.id} className="about-text images2">
              <img
                src={value.image}
                alt="Business Illustration"
              />
              <div className="titleCard">{value.title}</div>
              <div className="subtitleCard">{value.subtitle}</div>
            </div>
          ))}
        </div>
        <div className="about-text-section">
        <div className="about-text"></div>
          <div className="about-text">
            <img
              src={contact}
              alt="Contact Illustration"
            />
            <div className="titleCard">Are You Facing Any Problem..?</div>
            <p>It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
            <button className="btn">Contact Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;