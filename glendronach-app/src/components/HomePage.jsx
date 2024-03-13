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
          <div class="bottle12">
          <img src={process.env.PUBLIC_URL + '/bottle_12years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn1">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="bottle15">
          <img src={process.env.PUBLIC_URL + '/bottle_15years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn2">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="bottle18">
          <img src={process.env.PUBLIC_URL + '/bottle_18years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn3">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="bottle21">
          <img src={process.env.PUBLIC_URL + '/bottle_21years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn4">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="bottle28">
          <img src={process.env.PUBLIC_URL + '/bottle_28years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn5">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="bottle29">
          <img src={process.env.PUBLIC_URL + '/bottle_29years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="btn6">
          <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail">
          <div class="bottleportwood">
          <img src={process.env.PUBLIC_URL + '/bottle_portwood.png'} alt="bottle" />
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
