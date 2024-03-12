import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div class="home">
      <img src={process.env.PUBLIC_URL + '/home_background.jpg'} alt="home" />
      </div>
        <Link to="/detail">
          <div class="btn1">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
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
    </div>
  );
};

export default HomePage;
