import React from 'react';
import './../styles/Blog.css';
import blogImage from './../assets/images/blogImage.jpeg'; // замените на реальный путь к изображению

const Blog = () => {
    const blogPosts = [
      {
        date: '12 марта',
        title: 'Кальянные комплектующие',
        description: 'Cacti are succulents are easy care plants for any home',
        image: blogImage,
      },
      {
        date: '12 марта',
        title: 'Кальянные комплектующие',
        description: 'Cacti are succulents are easy care plants for any home',
        image: blogImage,
      },
      {
        date: '12 марта',
        title: 'Кальянные комплектующие',
        description: 'Cacti are succulents are easy care plants for any home',
        image: blogImage,
      },
      {
        date: '12 марта',
        title: 'Кальянные комплектующие',
        description: 'Cacti are succulents are easy care plants for any home',
        image: blogImage,
      },
    ];
  
    return (
      <div className="blog-container">
         <div className="blog-header">
        <h2>Наш Блог</h2>
        <p>Мы являемся интернет-магазином кальянов, предлагающим широкий ассортимент современных и по доступной цене кальянов и их комплектующих</p>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-text">
              <p className="blog-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p className='blog-description'>{post.description}</p>
              <a href="#" className="blog-read-more">Читать <span>→</span></a>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Blog;