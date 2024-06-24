import React from 'react';
import './../styles/EmailSection.css';
import smoke from './../assets/images/smoke.svg'

const EmailSection = () => {
  return (
    <div className="email-section">
      <div className="email-content">
        <h3>Не нашли нужный товар?</h3>
        <div className="email-input-container">
          <input type="email" placeholder="впишите ваш email ..." className="email-input" />
          <button className="email-button">Ок</button>
        </div>
        <p>Мы сможем подобрать нужный вам товар, а так же помочь со всеми вопросами, просто заполните ваш емейл и мы вам ответим</p>
      </div>
      <div className="email-image">
        <img src={smoke} alt="Email Illustration" />
      </div>
    </div>
  );
};

export default EmailSection;
