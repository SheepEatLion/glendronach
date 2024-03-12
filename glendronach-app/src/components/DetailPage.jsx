import React from 'react';
import './DetailPage.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';


const DetailPage = () => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/detail_12years.jpg'} />
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/button_back.png'} />
      </Link>
    </div>
  );
};

export default DetailPage;
