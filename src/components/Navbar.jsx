import React from "react";
import Logo from "../assets/images/newLogo.png";
import { Link } from "react-router-dom";
import "../assets/scss/navbar.scss";
import Down from "../assets/images/Rectangle 2.svg";

const Navbar = () => {
  const [productTab, setProductTab] = React.useState(false);

  const toggleProductTab = () => {
    setProductTab(!productTab);
  };

  const removeProductTab = () => {
    setProductTab(false);
  };
  return (
    <nav>
      <Link to="">
        <img width="120" src={Logo} alt="bitcard logo" />
      </Link>
      <div className="menu-list d-flex">
        <Link to="/blog">Blog</Link>

        <div>
          <Link onClick={toggleProductTab} to="#">
            Product
            <img className="ms-2" src={Down} alt="down-icon" />
          </Link>
          <div className={`product-nav-content shadow-lg ${!productTab && "d-none"}`}>
            <ul className="list-unstyled">
              <li>
                <Link onClick={removeProductTab} to="/virtual-card">
                  Virtual Card
                </Link>
              </li>

              <li>
                <Link onClick={removeProductTab} to="/crypto">
                  Cryptocurrency
                </Link>
              </li>

              <li>
                <Link onClick={removeProductTab} to="/global-account">
                  Global Account
                </Link>
              </li>

              <li>
                <Link onClick={removeProductTab} to="/giftcard">
                  Giftcard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/about">About</Link>
      </div>
      <div className="telegram-link d-flex">Join Our Telegram</div>
      <div className="download-link d-flex">Download</div>
    </nav>
  );
};

export default Navbar;
