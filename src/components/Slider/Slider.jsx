import React from "react";
import DataLogement from "../../fichier.json";
import { useParams } from "react-router-dom";
import { useState } from 'react'

function Slider (){

    const { id } = useParams();
    const logement = DataLogement.find((logement) => logement.id === id);

    const pictures = logement ? logement.pictures : [];
    // Vérifiez d'abord si logement est défini, puis extrayez les images

    const [currentIndex, setCurrentIndex] = useState(0)
    // initialisation de l'état local "currentIndex" à 0 à l'aide du hook "useState".

    const length = pictures.length
    // On click to left arrow, change index to get the previous one
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
        //si l'index est 0 (première image) alors on fait -1 pour passer à la dernière image.
    }
    // On click to right arrow, change index to get the next one
    const goToNext = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
        //si l'index est à -1 il sera remis à 0 pour que le diaporama boucle à la première image. 
        //Sinon, il sera incrémenté de 1 pour afficher l'image suivante.
    }

    return(
        <div className='slider-container'>
            {/* Arrows nav -- hidden if only 1 img -- call goToPrevious / goToNext functions on click*/}
            <div className={pictures.length <= 1 ? 'hide' : 'slider-arrows'}>
                <img className='left-arrow' src='/asset/prev.png' alt='flèche de gauche' onClick={goToPrevious} />
                <img className='right-arrow' src='/asset/next.png' alt='flèche de droite' onClick={goToNext} />
            </div>
            {/* Show counter if more than 1 picture */}
            <div className={pictures.length <= 1 ? 'hide' : 'slider-count'}>
                {currentIndex + 1}/{pictures.length}
            </div>

            {
                // map through pictures to get each url and add an index
                pictures.map((picture, index) => {
                    return (
                        // for each picture, show it if match current index + show matching img
                        <div className={index === currentIndex ? 'slider-img' : 'hide'} key={index}>
                            <img key={index} src={picture} alt={`Aperçu nº${currentIndex + 1}`} />
                        </div>
                    )
                })}
        </div>
    );
}

export default Slider;