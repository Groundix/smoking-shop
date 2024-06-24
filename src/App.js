import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Slider from './components/Slider';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './styles/main.css';
import FeaturedProducts from './components/FeaturedProducts';
import Blog from './components/Blog';
import EmailSection from './components/EmailSection'; 

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Slider />
      <div className="main-content">
        <CategoryFilter />
        <ProductGrid />
      </div>
      <FeaturedProducts />
      <Blog />
      <EmailSection />
      <Footer />
    </div>
  );
}

export default App;
