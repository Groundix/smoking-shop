import React, { useState } from "react";
import "./../styles/ProductGrid.css";
import defaultImage from "./../assets/images/item.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TfiViewList } from "react-icons/tfi";
import { IoGridSharp } from "react-icons/io5";



const ProductGrid = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [activeCategory, setActiveCategory] = useState("Наши товары");

  const products = [
    { name: "Alpha Hookah Beat Splash Doc (Колба Clear)", price: "1 190.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽", sale: true, oldPrice: "2 290.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
    { name: "Alpha Hookah Beat Splash Doc (Колба Gray)", price: "1 690.00₽" },
  ];

  return (
    <div className="product-grid">
      <div className="product-header">
        <div className="product-categories">
          <span
            className={`category ${
              activeCategory === "Наши товары" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Наши товары")}
          >
            Наши товары
          </span>
          <span
            className={`category ${
              activeCategory === "Все товары" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Все товары")}
          >
            Все товары
          </span>
          <span
            className={`category ${
              activeCategory === "Новинки" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Новинки")}
          >
            Новинки
          </span>
          <span
            className={`category ${
              activeCategory === "Скидки" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("Скидки")}
          >
            Скидки
          </span>
        </div>
        <div className="view-toggle">
          <span
            className={`grid-view ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <IoGridSharp />
          </span>
          <span
            className={`list-view ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <TfiViewList />
          </span>
        </div>
      </div>
      <div className={`product-list ${viewMode}`}>
        {products.map((product, index) => (
          <div className={`product-card ${viewMode}`} key={index}>
            {product.sale && (
              <div className="sale-label">13% SALE</div>
            )}
            <div className="image-container">
              <img src={defaultImage} alt={product.name} />
              <div className="wishlist">
                <FaRegHeart className="heart-icon" />
              </div>
            </div>
            <div className="product-info">
              <h5>{product.name}</h5>
              <p>
                {product.price}
                {product.sale && (
                  <span className="product-card-price-old">{product.oldPrice}</span>
                )}
              </p>
            </div>
            <div className={` ${viewMode === 'grid' ? 'grid-controls' : 'list-controls'}`}>
              {viewMode === 'grid' ? (
                <>
                  <button className="add-to-cart">В корзину</button>
                  <div className="quantity-control">
                    <button className="minus">
                      <FaMinus />
                    </button>
                    <span>1</span>
                    <button className="plus">
                      <FaPlus />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button className="add-to-cart">В корзину</button>
                  <div className="quantity-control">
                    <button className="minus">
                      <FaMinus />
                    </button>
                    <span>1</span>
                    <button className="plus">
                      <FaPlus />
                    </button>
                  </div>
                  <div className="wishlist-list">
                    <FaRegHeart className="heart-icon" />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span className="page-number active">1</span>
        <span className="page-number">2</span>
        <span className="page-number">3</span>
        <span className="page-number">4</span>
        <span className="page-number next-page">
        &#9002;

        </span>
      </div>
    </div>
  );
};

export default ProductGrid;
