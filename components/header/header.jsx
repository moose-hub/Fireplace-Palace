"use client";

import "./header.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from "../../assets/logo-small.png";

// eslint-disable-next-line react/prop-types
function Header({ text }) {
  const [navShown, setNavShown] = useState(false);

  const toggleNav = () => {
    setNavShown(!navShown);
  };

  return (
    <header>
      <Image
        src={Logo}
        placeholder="empty"
        alt="logo image"
        width="160"
        height="60"
        className="header__logo"
      />
      <div className="nav__wrapper">
        <nav className="nav__wrapper-primary" aria-label="Primary navigation">
          <ul className="nav__list-primary">
            <li className="nav__link-primary">
              <Link className="nav__link" href="/">
                Home
              </Link>
            </li>
            <li className="nav__link-primary">
              <Link className="nav__link" href="/founders">
                Founders
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={navShown ? "nav__wrapper-mobile nav__drawer-open" : "nav__wrapper-mobile"} aria-label="Mobile navigation"
          onClick={() => (navShown ? toggleNav() : false)}
        >
          <button
            className={navShown ? "nav__button-mobile" : "nav__hide nav__button-mobile"}
            onClick={toggleNav}
          >
            <span className={navShown ? "line-md--menu-to-close-transition" : "line-md--close-to-menu-transition"}></span>
          </button>
          <ul className="nav__list-mobile">
            <li>
              <Link className="nav__link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav__link" href="/founders">
                Founders
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={navShown ? "nav__hide nav__button-mobile" : "nav__button-mobile"}
          onClick={toggleNav}
        >
          <span className={navShown ? "line-md--menu-to-close-transition" : "line-md--close-to-menu-transition"}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
