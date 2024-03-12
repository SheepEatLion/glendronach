import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div class="HomePage">
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
    </div>
  );
};

export default HomePage;
