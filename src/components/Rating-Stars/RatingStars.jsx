import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


  function RatingStars({ratingStars}) {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= ratingStars) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="logement-star logement-star-red"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="logement-star logement-star-gray"
          />
        );
      }
    }

    return stars;
  }

  export default RatingStars;