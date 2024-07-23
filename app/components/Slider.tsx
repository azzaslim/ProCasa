"use client";

import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "/assets/img/slide-1.jpg",
    "/assets/img/house2.jpg",
    "/assets/img/slide-3.jpg"
  ];
  const description=['Vous voulez vendre, louer ou acheter un appartement, terrain ou une maison? Déposer et consulter gratuitement nos annonces immobilières partout en Tunisie.','ProCasa et la meilleur adresse','Trouvez et comparez les prix des meilleures propriétés en vente issues de nos agences'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
       {description.map((description, index) => (
        <h1
          key={index}
          className={ `text-center font-bold		text-white text-4xl	 line-clamp-3	font-mono duration-1000 absolute inset-0 flex items-center justify-center ${index === currentIndex ? 'opacity-120' : 'opacity-0'}`}
         
        > {description}</h1>
      ))}
    </div>
  );
};

export default Slider;
