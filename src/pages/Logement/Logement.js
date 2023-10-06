import React from "react";
import DataLogement from "../../fichier.json";
import Slider from "../../components/Slider/Slider";
import Collapse from "../../components/Collapse/Collapse";
import { useParams, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Logement() {
  const { id } = useParams();
  const logement = DataLogement.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  const {
    title,
    description,
    host: { name, picture },
    rating,
    location,
    equipments,
    tags,
  } = logement;

  const ratingStars = parseFloat(rating);

  function generateRatingStars(ratingStars) {
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

  return (
    <div className="main-logement">
      <div className="logement">
        <Slider />
        <div className="logement-title-and-host">
          <h2 className="logement-title">{title}</h2>
          <div className="logement-host">
            <p className="logement-host-name">{name}</p>
            <img
              className="logement-host-picture"
              src={picture}
              alt="propiétaire"
            />
          </div>
        </div>
        <p className="logement-location">{location}</p>
        <div className="logement-tag-and-rating">
          <div className="logement-tag-container">
            {tags.map((tags, index) => (
              <div key={index} className="logement-tag">
                {tags}
              </div>
            ))}
          </div>
          <div className="logement-rating-container">
            {generateRatingStars(ratingStars)}
          </div>
        </div>
        <div className="logement-collapse-container">
          <Collapse title="Description" description={description} />
          <Collapse title="Équipements" description="">
            <ul>
              {equipments.map((equipments, index) => {
                return <li key={equipments + index}>{equipments}</li>;
              })}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
export default Logement;
