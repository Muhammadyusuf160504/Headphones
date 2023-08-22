// rrd import
import { Link, NavLink } from "react-router-dom";
// style
import "./Footer.css";
// image
import siteLogo from "../../assets/audiophile-site-logo.svg";
import facebook from "../../assets/facebook-icon.svg";
import twitter from "../../assets/twitter-icon.svg";
import instagram from "../../assets/instagram-icon.svg";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__nav">
            <div className="rectangle"></div>
            <NavLink className="site-logo" to="/">
              <img
                className="site-logo__img"
                src={siteLogo}
                alt="audiophile website white logo"
                width="143"
                height="25"
              />
            </NavLink>
            <nav className="sitenav">
              <ul className="sitenav__list">
                <li className="sitenav__item">
                  <NavLink className="sitenav__link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="sitenav__item">
                  <NavLink className="sitenav__link" to="headphones">
                    HEADPHONES
                  </NavLink>
                </li>
                <li className="sitenav__item">
                  <NavLink className="sitenav__link" to="speakers">
                    SPEAKERS
                  </NavLink>
                </li>
                <li className="sitenav__item">
                  <NavLink className="sitenav__link" to="earphones">
                    EARPHONES
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <p className="footer__p">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="icons">
            <Link className="icons__icon" to="https://facebook.com">
              <img src={facebook} alt="" width="24" height="24" />
            </Link>
            <Link className="icons__icon" to="https://twitter.com">
              <img src={twitter} alt="" width="24" height="20" />
            </Link>
            <Link className="icons__icon" to="https://instagram.com">
              <img src={instagram} alt="" width="24" height="24" />
            </Link>
          </div>

          <p className="footer__p2">Copyright 2021. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
