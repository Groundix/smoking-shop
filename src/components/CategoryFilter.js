import React, { useState } from "react";
import "./../styles/CategoryFilter.css";
import advertisement from "./../assets/images/advertisement.png";
import ReactSlider from "react-slider";

const CategoryFilter = () => {
  const [categories] = useState([
    { name: "Любой магазин", count: 33, subcategories: [] },
    { name: "IQOS", count: 12, subcategories: ["IQOS Heets", "IQOS Accessories"] },
    { name: "Аксессуары", count: 65, subcategories: ["Кейсы", "Чехлы", "Зарядные устройства"] },
    { name: "Кальянные смеси", count: 39, subcategories: ["Табак", "Сиропы", "Камни"] },
    { name: "Кальяны", count: 23, subcategories: ["Традиционные", "Электронные", "Мини"] },
    { name: "Комплектующие", count: 17, subcategories: ["Шахты", "Колбы", "Мундштуки"] },
    { name: "Мерч", count: 19, subcategories: ["Футболки", "Кепки", "Стикеры"] },
    { name: "Уголь", count: 13, subcategories: ["Кокосовый", "Древесный"] },
    { name: "Электронные сигареты", count: 8, subcategories: ["POD системы", "Батарейки", "Зарядные устройства"] },
  ]);

  const [priceRange, setPriceRange] = useState([100, 15000]);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleThumbActive = (index) => {
    const thumbs = document.querySelectorAll(".thumb");
    thumbs[index].classList.add("active");
    setTimeout(() => {
      thumbs[index].classList.remove("active");
    }, 200);
  };

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="category-filter-container">
      <div className="category-filter">
        <div className="categories">
          <h4>Категории</h4>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <div className="category-header" onClick={() => toggleCategory(index)}>
                  <span className="category-name">
                    <i className="icon">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.6666 1.66699L5.99992 6.33366L1.33325 1.66699"
                          stroke="#231F20"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </i>{" "}
                    {category.name}
                  </span>
                  <span className="category-count">({category.count})</span>
                </div>
                {activeCategory === index && (
                  <ul className="subcategory-list">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>{subcategory}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="price-range">
          <h4>Цена</h4>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            value={priceRange}
            min={100}
            max={15000}
            onChange={(value) => setPriceRange(value)}
            onAfterChange={(value) => {
              handleThumbActive(0);
              handleThumbActive(1);
            }}
            renderTrack={(props, state) => (
              <div
                {...props}
                className={`track track-${state.index}`}
              />
            )}
          />
          <div className="price-values">
            <span>{priceRange[0]}₽</span>
            <span>{priceRange[1]}₽</span>
          </div>
          <div className="filter-buttons">
            <button className="apply-button">Применить</button>
            <button className="reset-button">Сброс</button>
          </div>
        </div>
      </div>
      <div className="advertisement">
        <img src={advertisement} alt="Advertisement" />
      </div>
    </div>
  );
};

export default CategoryFilter;
