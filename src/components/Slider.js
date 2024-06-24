import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide5 from '../assets/images/slide5.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import './../styles/Slider.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slider-container" style={{ position: 'relative', width: '1200px', height: '450px', margin: '0 auto' }}>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
        {/* Добавьте дополнительные слайды, если необходимо */}
      </Carousel>
      <div className="custom-indicators">
        <div className={`custom-indicator ${index === 0 ? 'active' : ''}`} onClick={() => handleSelect(0)}></div>
        <div className={`custom-indicator ${index === 1 ? 'active' : ''}`} onClick={() => handleSelect(1)}></div>
        <div className={`custom-indicator ${index === 2 ? 'active' : ''}`} onClick={() => handleSelect(2)}></div>
        {/* Добавьте дополнительные индикаторы, если необходимо */}
      </div>
    </div>
  );
};

export default Slider;
