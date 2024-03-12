import React from 'react';
import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} />
      </Link>
  );
};

export default HomePage;
