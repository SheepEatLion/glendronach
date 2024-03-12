import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} alt="Next" />
      </Link>
  );
};

export default HomePage;
