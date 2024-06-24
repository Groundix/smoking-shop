import React from "react";
import "./../styles/Footer.css";
import taviat from "./../assets/images/taviat.svg";
import logo from "./../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-bar">
        <div className="footer-logo-bar">
          <img src={logo} alt="Smoking Shop Logo" />
        </div>
        <div className="footer-contact">
          <div className="footer-contact-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9604 2.29102C15.0446 2.63352 17.4813 5.06685 17.8279 8.15102"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.41715 13.5825C0.668834 7.83352 1.48623 5.20096 2.0922 4.35263C2.17005 4.21552 4.08881 1.34323 6.14557 3.02839C11.2508 7.23288 4.78767 6.63843 9.07458 10.9261C13.3624 15.2128 12.767 8.74996 16.9717 13.8541C18.6569 15.9117 15.7845 17.8303 15.6483 17.9073C14.7999 18.5141 12.1664 19.3315 6.41715 13.5825Z"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>+7 900 000 99 99</span>
          </div>
          <div className="footer-contact-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6208 7.51562C14.6208 7.51562 11.9457 10.7262 9.98919 10.7262C8.03347 10.7262 5.32837 7.51562 5.32837 7.51562"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.04346 9.97428C2.04346 4.27587 4.02758 2.37695 9.97997 2.37695C15.9323 2.37695 17.9165 4.27587 17.9165 9.97428C17.9165 15.6719 15.9323 17.5716 9.97997 17.5716C4.02758 17.5716 2.04346 15.6719 2.04346 9.97428Z"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>contact@greenshop.com</span>
          </div>
          <div className="footer-contact-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.092 8.92555C12.092 7.77449 11.1593 6.8418 10.0082 6.8418C8.85799 6.8418 7.92529 7.77449 7.92529 8.92555C7.92529 10.0758 8.85799 11.0085 10.0082 11.0085C11.1593 11.0085 12.092 10.0758 12.092 8.92555Z"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z"
                stroke="#96C361"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              Россия, 610001, Кировская обл, г Киров, Комсомольская ул, д. 46/6,
              оф. 401
            </span>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Мой аккаунт</h4>
            <ul>
              <li>Мой аккаунт</li>
              <li>История заказов</li>
              <li>Наши контакты</li>
              <li>Политика</li>
              <li>Блог</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Помощь</h4>
            <ul>
              <li>Поддержка</li>
              <li>Как купить</li>
              <li>Оплата и доставка</li>
              <li>Как вернуть</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Категории</h4>
            <ul>
              <li>IQOS</li>
              <li>Аксессуары</li>
              <li>Кальянные смеси</li>
              <li>Кальяны</li>
              <li>Комплектующие</li>
              <li>Мерч</li>
              <li>Уголь</li>
              <li>Электронные сигареты</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Соц сети</h4>
            <div className="social-icons">
              <span>
                <i className="fab fa-vk">
                  <svg
                    width="19"
                    height="13"
                    viewBox="0 0 19 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3261 12.1238C4.00543 12.1238 0.40022 7.79056 0.25 0.580078H3.41616C3.52013 5.87241 5.85424 8.11413 7.7031 8.57633V0.580078H10.6845V5.1444C12.5102 4.94796 14.4281 2.86801 15.0752 0.580078H18.0566C17.5597 3.39955 15.4798 5.47951 14.0007 6.33461C15.4798 7.02792 17.8487 8.8421 18.75 12.1238H15.4682C14.7633 9.92831 13.0071 8.22968 10.6845 7.99858V12.1238H10.3261Z"
                      fill="#231F20"
                    />
                  </svg>
                </i>
                <i className="fab fa-youtube">
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5185 3.45352C18.3431 2.06843 17.543 1.19963 16.1227 1.07132C14.4966 0.924388 10.9763 0.839844 9.34349 0.839844C6.00361 0.839844 4.51107 0.921429 2.93165 1.08489C1.42653 1.24041 0.76763 1.90925 0.50863 3.29006C0.327256 4.25764 0.25 5.16392 0.25 7.30574C0.25 9.22967 0.340872 10.4397 0.481472 11.4577C0.674797 12.8557 1.63443 13.6413 3.04076 13.7584C4.67686 13.8946 7.9544 13.9626 9.57492 13.9626C11.1408 13.9626 14.6647 13.881 16.2315 13.704C17.6338 13.5455 18.3007 12.7964 18.5185 11.4169C18.5185 11.4169 18.75 9.90581 18.75 7.29213C18.75 5.80391 18.6412 4.41982 18.5185 3.45352ZM7.53293 10.0013V4.68311L12.5968 7.31499L7.53293 10.0013Z"
                      fill="#231F20"
                    />
                  </svg>
                </i>
                <i className="fab fa-telegram">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1728 0.86656C17.1728 0.86656 18.8842 0.199266 18.7416 1.8199C18.694 2.48723 18.2662 4.82286 17.9334 7.34915L16.7925 14.8327C16.7925 14.8327 16.6974 15.929 15.8417 16.1197C14.986 16.3104 13.7025 15.4524 13.4648 15.2617C13.2746 15.1187 9.89943 12.9737 8.71095 11.9251C8.37817 11.6391 7.99785 11.0671 8.75846 10.3998L13.7501 5.6332C14.3205 5.06121 14.891 3.72655 12.514 5.34719L5.85866 9.87547C5.85866 9.87547 5.09801 10.3521 3.67188 9.92313L0.581866 8.96982C0.581866 8.96982 -0.559065 8.25483 1.39002 7.53981C6.14389 5.29949 11.9911 3.01152 17.1728 0.86656Z"
                      fill="#231F20"
                    />
                  </svg>
                </i>
              </span>
              <p className="footer-company">
                © 2023 Smoking Shop. Все права защищены.
              </p>
              <p className="footer-inn">
                ИНН 4345427922 КПП 434501001 ОГРН 1154350010473
              </p>
            </div>
            
          </div>
        </div>
        <div className="footer-info">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="36" cy="36" r="35" stroke="#96C361" stroke-width="2" />
            <path
              d="M18.89 26H20.84V47H16.55V30.98L11.84 32.96V28.73L18.89 26ZM37.1096 36.02C39.2096 36.89 40.3496 38.78 40.3496 41.09C40.3496 44.99 36.8996 47.36 32.2796 47.36C27.6896 47.36 24.2396 44.99 24.2396 41.09C24.2396 38.78 25.3796 36.89 27.4796 36.02C25.8296 35.24 24.8396 33.59 24.8396 31.61C24.8396 28.1 28.0796 25.64 32.2796 25.64C36.5096 25.64 39.7496 28.1 39.7496 31.61C39.7496 33.59 38.7296 35.24 37.1096 36.02ZM32.2796 29.66C30.1196 29.66 29.1296 30.71 29.1296 32.15C29.1296 33.47 29.9396 34.37 32.2796 34.37C34.6196 34.37 35.4596 33.47 35.4596 32.15C35.4596 30.71 34.4396 29.66 32.2796 29.66ZM32.2796 43.34C34.6796 43.34 36.0296 42.41 36.0296 40.7C36.0296 38.9 34.7096 38.09 32.2796 38.09C29.8796 38.09 28.5596 38.9 28.5596 40.7C28.5596 42.41 29.9096 43.34 32.2796 43.34ZM53.438 30.65V36.08H58.808V40.16H53.438V45.59H49.148V40.16H43.778V36.08H49.148V30.65H53.438Z"
              fill="#3D3D3D"
            />
          </svg>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="health">
          <h5>МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: КУРЕНИЕ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ!</h5>
        </span>
        <p>
          Мы не рекламируем табак и курение. Вся информация на сайте носит
          информационный характер. Дистанционная продажа табачных изделий не
          ведется.
        </p>
        <div className="footer-credit">
          <h4>Разработка сайта</h4>
          <img src={taviat} alt="Taviat Pro" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
