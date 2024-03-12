import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h1> homepage - test </h1>
      <img src={process.env.PUBLIC_URL + '/home_background.jpg'} />
      <Link to="/detail">
        <img src={process.env.PUBLIC_URL + '/button_next.png'} />
      </Link>
    </div>
  );
};

const Detail = () => {
  return (
    <div>
      <h1> detailPage - test </h1>
      <img src={process.env.PUBLIC_URL + '/detail_12years.jpg'} />
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/button_back.png'} />
      </Link>
    </div>
  );
};

export default App;
