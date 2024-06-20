import React, { useState, useEffect } from 'react';
import './slideshow.css'; // Make sure to import the CSS file

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slide-show-container">
      <button onClick={prevSlide}>Previous</button>
      <div className={`slide ${currentSlide === 0? 'active-slide' : ''}`}>
        {slides[currentSlide]}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default SlideShow;