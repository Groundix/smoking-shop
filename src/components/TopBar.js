import React, { useState, useEffect } from 'react';
import { FaVk, FaYoutube, FaTelegramPlane, FaChevronDown } from 'react-icons/fa';
import './../styles/TopBar.css';

const cities = [
  'Москва', 'Киров', 'Пермь', 'Казань', 'Сыктывкар', 'Нижний Новгород', 'Кострома',
  'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Тагил', 'Воронеж', 'Челябинск',
  'Самара', 'Омск', 'Уфа', 'Красноярск', 'Волгоград', 'Краснодар', 'Саратов', 'Тюмень'
];

const TopBar = () => {
  const [currentCity, setCurrentCity] = useState('Москва');
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 10); // Delay to ensure CSS transition
  }, []);

  const handleCityClick = (city) => {
    setCurrentCity(city);
    setIsCityModalOpen(false);
    setIsConfirmationModalOpen(false);
  };

  const handleNoClick = () => {
    setIsConfirmationModalOpen(false);
    setIsCityModalOpen(true);
  };

  const handleTopBarCityClick = () => {
    setIsConfirmationModalOpen(false);
    setIsCityModalOpen(true);
  };

  const handleYesClick = () => {
    setIsConfirmationModalOpen(false);
    setIsCityModalOpen(false);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div className="city" onClick={handleTopBarCityClick}>
          {currentCity} <FaChevronDown size={12} />
        </div>
        <div className="social-icons-top">
          <a href="#"><FaVk size={16} /></a>
          <a href="#"><FaYoutube size={16} /></a>
          <a href="#"><FaTelegramPlane size={16} /></a>
        </div>
      </div>
      {isConfirmationModalOpen && (
        <div className={`confirmation-modal ${showModal ? 'show' : ''}`}>
          <p>Ваш город {currentCity} верно?</p>
          <div className="buttons-modal">
            <button className="yes-button" onClick={handleYesClick}>Да</button>
            <button className="no-button" onClick={handleNoClick}>Нет</button>
          </div>
        </div>
      )}
      {isCityModalOpen && (
        <div className="overlay" onClick={() => setIsCityModalOpen(false)}>
          <div className="city-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Укажите ваш город</h3>
            <div className="city-list">
              {cities.map((city) => (
                <div key={city} onClick={() => handleCityClick(city)} className="city-option">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
