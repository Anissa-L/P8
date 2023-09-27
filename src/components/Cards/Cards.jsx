import { NavLink } from "react-router-dom";
import DataCards from "../../fichier.json";

function Cards () {
    return (
        <div className="cards-container">
            {DataCards.map(({id, cover, title,}) =>(
                <NavLink className="card" to={`logement/${id}`} key={id} >
                    <img className="card-img" src={cover} alt="Aperçu du logement" />
                    <div className="card-title"><h2>{title}</h2></div>
                </NavLink>
            ))}

        </div>

    );
}

export default Cards;