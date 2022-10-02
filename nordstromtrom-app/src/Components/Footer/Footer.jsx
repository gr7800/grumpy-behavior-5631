import React from "react";
import "./Footer.css";
// import "./f.jpg"
const Footer = () => {
  return (
    <div id="Footer">
    {/* <div className="image">
    <img src="./img.jpg" alt=""/>
    </div> */}
    <div className="sign">
    Get E-mail Updates:
    <input type="text" placeholder="E-mail address"/>
    <button>SIGN UP</button>
    </div>
      <section className="footers bg-light pt-5 pb-3">
        <div className="container pt-5">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-2 footers-two">
              <h5 id="size">Customer Service </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="maintenance.html">Order Status</a>
                </li>
                <li>
                  <a href="contact.html">Guest Returns</a>
                </li>
                <li>
                  <a href="about.html">Shipping & Return Policy</a>
                </li>
                <li>
                  <a href="about.html">Gift Cards</a>
                </li>
                <li>
                  <a href="about.html">FAQ</a>
                </li>
                <li>
                  <a href="/#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-three">
              <h5 id="size">About Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="maintenance.html">About Our Brand</a>
                </li>
                <li>
                  <a href="contact.html">The Nordy Club</a>
                </li>
                <li>
                  <a href="about.html">Store Locator</a>
                </li>
                <li>
                  <a href="about.html">All Brands</a>
                </li>
                <li>
                  <a href="about.html">Careers</a>
                </li>
                <li>
                  <a href="about.html">Get Email Updates</a>
                </li>
                <li>
                  <a href="about.html">Nordstrom Blog</a>
                </li>
                <li>
                  <a href="about.html">Nordy Podcast</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-four">
              <h5 id="size">Nordstrom Rack & The Community</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="maintenance.html">Corporate Social Responsibility</a>
                </li>
                <li>
                  <a href="contact.html">Diversity, Inclusion & Belonging</a>
                </li>
                <li>
                  <a href="about.html">Big Brothers Big Sisters</a>
                </li>
                <li>
                  <a href="about.html">Donate Clothes</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
              <h5 id="size">Nordstrom Card</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="maintenance.html">Apply for a Nordstrom Card</a>
                </li>
                <li>
                  <a href="about.html">Pay My Bill</a>
                </li>
                <li>
                  <a href="about.html">Manage my Nordstrom Card</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
              <h5 id="size">Nordstrom, Inc.</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="maintenance.html">Nordstrom</a>
                </li>
                <li>
                  <a href="about.html">Nordstrom Canada</a>
                </li>
                <li>
                  <a href="about.html">Trunk Club</a>
                </li>
                <li>
                  <a href="about.html">HauteLook</a>
                </li>
                <li>
                  <a href="contact.html">Investor Relations</a>
                </li>
                <li>
                  <a href="contact.html">Press Releases</a>
                </li>
                <li>
                  <a href="contact.html">Nordstrom Media Network</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 footers-one">
              <div className="footers-info mt-3">
                <p id="apps">
                  <i id="social-fb" className="fa fa-mobile fa-2x social"></i>
                  Download Our Apps
                </p>
              </div>

              <div className="social-icons">
                <a href="https://www.facebook.com/">
                  <i
                    id="social-fb"
                    className="fa fa-facebook fa-2x social"
                  ></i>
                </a>
                <a href="https://twitter.com/">
                  <i
                    id="social-tw"
                    className="fa fa-twitter fa-2x social"
                  ></i>
                </a>
                <a href="https://plus.google.com/">
                  <i
                    id="social-gp"
                    className="fa fa-pinterest-p fa-2x social"
                  ></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i
                    id="social-em"
                    className="fa fa-instagram fa-2x social"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
