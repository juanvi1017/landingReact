import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-footer">
        {/* Text Content */}
        <div className="footer-text">
          <h1>
            <span>Developers</span> <br />
          </h1>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.</p>
          <p>
            <li>Marketing program activities</li>
            <li>Customization product</li>
            <li>At vero eos accusamus iusto</li>
          </p>
        </div>
        <div className="footer-text">
          <h1>
            <span>Customer</span> <br />
          </h1>
          <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
          <p>
            <li>Works</li>
            <li>Strategy</li>
            <li>Releases</li>
            <li>Press</li>
            <li>Mission</li>
          </p>
        </div>
        <div className="footer-text">
          <h1>
           <span>Product</span> <br />
          </h1>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae.</p>
          <p>
            <li>Tranding</li>
            <li>Popular</li>
            <li>Features</li>
            <li>Customers</li>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Footer;