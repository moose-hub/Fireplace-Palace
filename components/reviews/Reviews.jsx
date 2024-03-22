"use client";

import "./Reviews.css"
import { useState, useEffect } from "react";
import useSWR from 'swr';

// async function Review({ country }) {
//   return (
//     <p className="review__author">
//       {text}
//     </p>
//   )
// }
const fetcher = (...args) => fetch(...args).then(res => res.json());

const useReview = (country) => {
  const { data, isError, isLoading } = useSWR(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`, fetcher);

  const defaults = {
    text: " Choose your country to see the latest review"
  }

  return {
    review: data || defaults,
    error: isError,
    isLoading: data ? isLoading : false
  }
}

function content__toggler() {

  const [currentCountry, setCurrentCountry] = useState(null);
  // const [review, setReview] = useState({});
  // const { review, error, isLoading } = useSWR(buildURL(currentCountry), fetcher)
  const { review, error, isLoading } = useReview(currentCountry);
  console.log("review is", review)
  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}!</div>


  // useEffect(() => {
  //   if (currentCountry) {
  //     fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${currentCountry}`)
  //       .then(response => response.json())
  //       .then(setReview);
  //   }
  // }, [currentCountry]);

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
      {/* <div className={!currentCountry ? "hide__review" : "review__wrapper"}> */}
      <div className="review__wrapper">
        <p className="review__text">
          {
            error ? "Error" :
              isLoading ? "Loading" :
                review.text
          }
        </p>
        <div className={currentCountry ? "review__author" : "review__author hide"}>
          {review.author} - <span className="review__author-location">{review.location}</span>
        </div>
      </div>
    </div>
  );
}

export default content__toggler;