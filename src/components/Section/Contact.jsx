import React from "react";
import contact from "../../assets/images/contact.png"
import "./styles/Section.css";

const Contact = ({ id }) => {
  return (
    <section id={id} className="section">
      <div className="title">
        <h2>Contact Us</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
      </div>
      <div className="container-section">
        {/* Text Content */}
        <div className="section-text-section">
          <div className="section-text"></div>
          <div className="section-text">
            <img
              src={contact}
              alt="Contact Illustration"
            />
            <div className="titleCard">Are You Facing Any Problem..?</div>
            <p>It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
            <button className="btn">Contact Send</button>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Contact;