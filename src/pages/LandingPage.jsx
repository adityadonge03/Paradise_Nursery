import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-layer"></div>
      <div className="overlay"></div>

      <div className="landing-content">
        <div className='main'>
        <div className="left">
          <h1 className="heading">Paradise Nursery</h1>
          <p>Welcome to Paradise Nursery! We offer a variety of house plants to make your home a paradise.</p>
        </div>

        <div className="right">
          <p>
          Our mission is to provide a wide range of high-quality plants that not only 
          enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. 
          From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
          </p>
          <p>
          Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
          Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step 
          of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant 
          for your home or office.
          </p>
          <p>
          Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the 
          beauty of nature right at your doorstep.
          </p>

          <Link to="/products" className="get-started-btn">Get Started</Link>
        </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
