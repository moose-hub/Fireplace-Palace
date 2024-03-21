"use client";

import "./Reviews.css"
import { useState, useEffect } from "react";

function content__toggler() {

  const [currentCountry, setCurrentCountry] = useState(null);
  const [review, setReview] = useState({});

  useEffect(() => {
    if (currentCountry) {
      fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${currentCountry}`)
        .then(response => response.json())
        .then(setReview);
    }
  }, [currentCountry]);

  const handleClick = (ev) => {
    setCurrentCountry(ev.target.textContent.toLowerCase())
  }

  return (
      <div className="content__toggler-wrapper">
        <h1 className="content__toggler-title">Trusted.</h1>
        <p className="content__toggler-desc">We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
        <div className="content__toggler-buttons">
          <button onClick={handleClick} className={currentCountry === "england" ? "content__toggler-button button-england active" : "content__toggler-button button-england"}>England</button>
          <button onClick={handleClick} className={currentCountry === "wales" ? "content__toggler-button button-wales active" : "content__toggler-button button-wales"}>Wales</button>
          <button onClick={handleClick} className={currentCountry === "scotland" ? "content__toggler-button button-scotland active" : "content__toggler-button button-scotland"}>Scotland</button>
        </div>
        <div className={!currentCountry ? "hide__review" : "review__wrapper"}>
          <p className="review__text">
            {review.text}
          </p>
          <div className="review__author">
            {review.author} - <span className="review__author-location">{review.location}</span>
          </div>
        </div>
      </div>
  );
}

export default content__toggler;