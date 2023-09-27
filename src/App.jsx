import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import Erreur from "./pages/Erreur/Erreur";
import About from "./pages/About/About";

//import des composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <Router>
        {/* Header présent dans toutes les pages */}
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Erreur />} />
      </Routes>
      {/* Footer présent dans toutes les pages */}
      <Footer />

    </Router>
  
  );
}

export default App;
