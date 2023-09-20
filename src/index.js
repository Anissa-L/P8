import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./pages/Home/App";
import Logement from "./pages/Logement/Logement";
import Erreur from "./pages/Erreur/erreur-404";
import APropos from "./pages/A_Propos/A_Propos";
import Header from "./components/Header/index";
// importer les paths des imports(Home,index.jsx(App.js)) //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <App />
      <Route path="/logement" element={<Logement />} />
      <Route path="*" element={<Erreur />} />
      <Route path="/apropos" element={<APropos />} />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
