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
          <div class="btn2">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn3">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn4">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn5">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn6">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn7">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>
    </div>
  );
};

export default HomePage;
