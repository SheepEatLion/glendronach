import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div class="root">
      <div class="home">
      <img class="img" src={process.env.PUBLIC_URL + '/home.png'} alt="home" />
      </div>
        <Link to="/detail/12years">
          <div class="bottle12">
          <img class="img" src={process.env.PUBLIC_URL + '/bottle_12years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/12years">
          <div class="btn1">
          <img class="img"  src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail/15years">
          <div class="bottle15">
          <img class="img"  src={process.env.PUBLIC_URL + '/bottle_15years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/15years">
          <div class="btn2">
          <img class="img"  src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail/18years">
          <div class="bottle18">
          <img class="img"  src={process.env.PUBLIC_URL + '/bottle_18years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/18years">
          <div class="btn3">
          <img class="img"  src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail/21years">
          <div class="bottle21">
          <img class="img"  src={process.env.PUBLIC_URL + '/bottle_21years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/21years">
          <div class="btn4">
          <img class="img" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail/28years">
          <div class="bottle28">
          <img class="img" src={process.env.PUBLIC_URL + '/bottle_28years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/28years">
          <div class="btn5">
          <img class="img" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail/29years">
          <div class="bottle29">
          <img class="img" src={process.env.PUBLIC_URL + '/bottle_29years.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/29years">
          <div class="btn6">
          <img class="img" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>

        <Link to="/detail/portwood">
          <div class="bottleportwood">
          <img class="img" src={process.env.PUBLIC_URL + '/bottle_portwood.png'} alt="bottle" />
          </div>
        </Link>

        <Link to="/detail/portwood">
          <div class="btn7">
          <img class="img" src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
          </div>
        </Link>
    </div>
  );
};

export default HomePage;
