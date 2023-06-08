import React from "react";
import "../assets/scss/footer.scss";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={Logo} alt="bitcard logo" />
          </div>
          <div className="col-2">
            <div className="text-end">
              <h5>Product</h5>
              <div>
                <Link to="/global-account">Global Account</Link>
              </div>
              <div>
                <Link to="/giftcard">Gift card</Link>
              </div>
              <div>
                <Link to="/virtual-card">Virtual master card</Link>
              </div>
              <div>
                <Link to="/crypto">Cryptocurrency</Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="text-end">
              <h5>Company</h5>
              <div>
                <Link to="/about">About us</Link>
              </div>
              <div>
                <Link to="#">Ambassador</Link>
              </div>
              <div>
                <Link to="/blog">Blog</Link>
              </div>
              <div>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="text-end">
              <h5>Contact Us</h5>
              <div>
                <Link to="mailto:hello@bitscard.co">email : hello@bitscard.co</Link>
              </div>
              <div>
                <Link to="tel:012293581">TEL: 01 229 3581</Link>
              </div>
              <div>
                <Link to="#">18 Admiralty way lekki, Lagos</Link>
              </div>
              <div>
                <Link to="#">Legal</Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <ul className="list-unstyled">
            <li>* Bitscard offers its products and services in partnership with licensed transmitters in their respective jurisdictions.</li>
            <li>
              * All trademarks and brand names belong to their respective owners. Use of these trademarks and brand names do not represent endorsement
              by or association with Bitscard
            </li>
            <li>
              * IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT: To help the government fight the funding of terrorism and money
              laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each
              person who opens an Account. What this means for you: When you open an Account, we will ask for your name, address, date of birth, and
              other information that will allow us to identify you. We may also ask to see a copy of your driver’s license.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
