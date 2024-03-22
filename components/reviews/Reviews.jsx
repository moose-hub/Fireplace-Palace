"use client";

import "./Reviews.css"
import { useState, useEffect } from "react";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useReview = (country) => {
  const { data, isError, isLoading } = useSWR(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`, fetcher);

  return {
    review: data,
    error: isError,
    isLoading
  }
}

const Author = ({ name, location }) => (
  <>
    {name} - <span className="review__author-location">{location}</span>
  </>
)

function Reviews() {

  const [currentCountry, setCurrentCountry] = useState("england");
  const { review, error, isLoading } = useReview(currentCountry);

  const handleClick = (ev) => {
    setCurrentCountry(ev.target.textContent.toLowerCase())
  }

  return (
    <div className="content__toggler-wrapper">
      <h1 className="content__toggler-title">Trusted.</h1>
      <p className="content__toggler-desc">We've got thousands of happy customers all over the UK</p>
      <div className="content__toggler-buttons">
        <button onClick={handleClick} className={currentCountry === "england" ? "content__toggler-button button-england active" : "content__toggler-button button-england"}>England</button>
        <button onClick={handleClick} className={currentCountry === "wales" ? "content__toggler-button button-wales active" : "content__toggler-button button-wales"}>Wales</button>
        <button onClick={handleClick} className={currentCountry === "scotland" ? "content__toggler-button button-scotland active" : "content__toggler-button button-scotland"}>Scotland</button>
      </div>
      <div className="review__wrapper">
        <p className="review__text">
          {
            error ? "There was an error fetching the review..." :
              isLoading ? "Loading..." :
                review.text
          }
        </p>
        <div className="review__author">
          {isLoading ? "Loading..." : <Author name={review.author} location={review.location} />}
        </div>
      </div>
    </div >
  );
}

export default Reviews;