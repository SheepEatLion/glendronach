import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomaPage">
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
    </div>
  );
};

export default HomePage;
