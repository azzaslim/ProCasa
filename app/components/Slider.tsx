"use client";

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap'; // Importez le Carousel depuis Bootstrap
 const Slider = () => {
  /*useEffect(() => {
    // Initialisation du Carousel de Bootstrap
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 2000, // Optionnel : définir l'intervalle de défilement automatique
      });
    }
  }, []); */

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="../assets/img/slide-1.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="../assets/img/slide-2.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="../assets/img/slide-3.jpg" alt="Third slide" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
