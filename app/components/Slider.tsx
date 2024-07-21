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
    </div>
  );
};

export default Slider;
