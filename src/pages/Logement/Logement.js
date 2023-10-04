import React from "react";
import DataLogement from "../../fichier.json";
import Slider from "../../components/Slider/Slider";
import Collapse from "../../components/Collapse/Collapse";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  const logement = DataLogement.find((logement) => logement.id === id);

  if (!logement) {
    return (
      <NavLink to="*" className="logement-erreur">
        Logement non trouvé
      </NavLink>
    );
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
            <p className="logement-tag">{tags}</p>
          </div>
          <div className="logement-rating-container">{rating}</div>
        </div>
        <div className="logement-collapse-container">
          <Collapse title="Description" description={description} />
          <Collapse title="Équipements" description={equipments} />
        </div>
      </div>
    </div>
  );
}
export default Logement;
