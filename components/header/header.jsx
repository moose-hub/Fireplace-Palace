"use client";

import "./header.css";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Header({ text }) {
  const [navShown, setNavShown] = useState(false);

  const toggleNav = () => {
    setNavShown(!navShown);
  }

  return (
    <header onClick={(e) => navShown && e.target.className === "header__header-expansion" ? toggleNav() : false
    } className={navShown ? "header__header-expansion" : false} >
      <button
        className={navShown ? "header__navButton-close header__navButton" : "header__navButton"}
        onClick={toggleNav}> {
          navShown ?
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                <path d="M5 5L19 5"><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5;M5 5L19 19" /></path>
                <path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12" />
                  <set attributeName="opacity" begin="0.4s" to="0" />
                </path>
                <path d="M5 19L19 19">
                  <animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 19L19 19;M5 19L19 5" />
                </path>
              </g>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
            </svg>
        }
      </button>
      <span className="header__text">{text}</span>
      <nav>
        <ul onClick={(e) => navShown && e.target.className === "nav__link" ? toggleNav() : false} className="nav__wrapper" style={navShown ? { left: 0 } : { left: "-100%" }} >
          <li>
            <Link className="nav__link" href="/">Home</Link>
          </li>
          <li>
            <Link className="nav__link" href="/founders">Founders</Link>
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default Header;