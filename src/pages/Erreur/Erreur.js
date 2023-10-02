import React from "react";
import { NavLink } from "react-router-dom";

function Erreur() {
  return (
    <div className="erreur">
      <div className="erreur-title">
        <h2>404</h2>
      </div>
      <div className="erreur-info">
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
      </div>
      <NavLink to="/" className="erreur-link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
export default Erreur;
