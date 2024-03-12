import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{
      backgroundImage: 'url(../../public/home_background.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: cover
    }}>
      테스트
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
    </div>
  );
};

export default HomePage;
