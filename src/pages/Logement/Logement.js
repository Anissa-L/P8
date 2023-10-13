import React from "react";
import DataLogement from "../../fichier.json";
import Slider from "../../components/Slider/Slider";
import Collapse from "../../components/Collapse/Collapse";
import { useParams, Navigate } from "react-router-dom";
import RatingStars from "../../components/Rating-Stars/RatingStars";

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

  return (
    <div className="main-logement">
      <div className="logement">
        <Slider />
        <div className="logement-container">
          <div className="logement-title-location-tags">
            <h2 className="logement-title">{title}</h2>
            <p className="logement-location">{location}</p>
            <div className="logement-tag-container">
              {tags.map((tags, index) => (
                <div key={index} className="logement-tag">
                  {tags}
                </div>
              ))}
            </div>
          </div>
          <div className="logement-host-rating">
            <div className="logement-host">
              <p className="logement-host-name">{name}</p>
              <img
                className="logement-host-picture"
                src={picture}
                alt="propiétaire"
              />
            </div>
            <div className="logement-rating-container">
              <RatingStars ratingStars={ratingStars} />
            </div>
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
