"use client";

import "./Reviews.css"
import { useState, useEffect } from "react";

function Reviews() {

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
    setCurrentCountry(ev.target.textContent.toLowerCase());
    const button = ev.target.parentElement.querySelector(".active");
    button?.classList.remove("active")
    ev.target.classList.add("active");
    // for (const button in buttons) {
    //   button.classList.remove("active")
    // }
    // console.log(buttons)
  }

  return (
    <>
      <h2 className="reviews__title">Trusted.</h2>
      <p className="reviews__desc">We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
      <div onClick={handleClick} className="reviews__buttons">
        <button className="reviews__button button-england">England</button>
        <button className="reviews__button button-wales">Wales</button>
        <button className="reviews__button button-scotland">Scotland</button>
      </div>

      <p className="reviews__text">
        {review.text}
      </p>
      <div className="reviews__author">
        {review.author} - <span className="reviews__author-location">{review.location}</span>
      </div>
    </>
  );
}

export default Reviews;