import React from "react";
import DataLogement from "../../fichier.json";
import { useParams } from "react-router-dom";

function Slider (){

    const { id } = useParams();
  const logement = DataLogement.find((logement) => logement.id === id);

  const {
    pictures
  } = logement;

    return(
        <div className="slider">
            
        <div className="slider-img">
            <img className="slider-img-image" src={pictures} alt="Aperçu du logement" key={id}/>
        </div>      
        
        </div>
    );
}

export default Slider;