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
    <header className="">
      <button
        className="nav__button"
        style={navShown ? { zIndex: 101 } : { zIndex: 1 }}
        onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
      </button>
      {text}
      <nav>
        <ul onClick={() => navShown ? toggleNav() : false} className="nav__wrapper" style={navShown ? { left: 0 } : { left: "-100%" }} >
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