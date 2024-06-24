// src/components/FeaturedProducts.js

import React from 'react';
import './../styles/FeaturedProducts.css';
import merchImage from './../assets/images/merch.png';
import hookahImage from './../assets/images/hookah.png';

const FeaturedProducts = () => {
  const featuredItems = [
    {
      title: 'Наш мерч',
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants',
      buttonText: 'Перейти',
      image: merchImage,
      imageSize: { width: '286px', height: '429px' },
      link: '#'
    },
    {
      title: 'Кальянные смеси & Кальяны',
      description: 'We are an online plant shop offering a wide range of cheap and trendy plants',
      buttonText: 'Перейти',
      image: hookahImage,
      imageSize: { width: '231px', height: '324px' },
      link: '#'
    }
  ];

  return (
    <div className="featured-products-container">
      <div className="featured-products">
        {featuredItems.map((item, index) => (
          <div className="featured-item" key={index}>
            <div className="featured-image" style={{ zIndex: 1 }}>
              <img src={item.image} alt={item.title} style={{ width: item.imageSize.width, height: item.imageSize.height }} />
            </div>
            <div className="featured-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="featured-button">{item.buttonText} →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
