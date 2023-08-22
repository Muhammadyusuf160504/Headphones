// rrd import
import { NavLink } from "react-router-dom";
// style
import "./Header.css";
// image
import siteLogo from "../../assets/audiophile-site-logo.svg";
import shoppingIcon from "../../assets/shopping-icon.svg";
function Header() {
  return (
    <header className="header">
      <div className="header__container container">
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
        <button className="header__btn">
          <img
            className="header__btn__icon"
            src={shoppingIcon}
            alt="Shopping icon"
            width="23.3"
            height="20"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
