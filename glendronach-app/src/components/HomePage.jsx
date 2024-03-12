import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <img src={process.env.PUBLIC_URL + '/home_background.jpg'} alt="home">
      <Link to="/detail">
        <img class="btn1" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn2" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn3" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn4" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn5" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn6" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn7" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>

      <Link to="/detail">
        <img class="btn8" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
    </img>
  );
};

export default HomePage;
