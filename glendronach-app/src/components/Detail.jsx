import React, { useState, useEffect } from 'react';
import './Detail.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';


export default function Detail() {
  const { years } = useParams();
  const [timer, setTimer] = useState(null);

  const handleClick = () => {
    clearTimeout(timer);
    setTimer(setTimeout(goToHomePage, 60000));
  };

  const goToHomePage = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    setTimer(setTimeout(goToHomePage, 60000));

    document.addEventListener('click', handleClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div class="mainImg">
      <img class="img" src={process.env.PUBLIC_URL + '/detail_'+years+'.jpg'} alt="mainImg" />
      <Link to="/">
        <div class="back">
        <img class="img" src={process.env.PUBLIC_URL + '/button_back.png'} alt="back" />
        </div>
      </Link>
    </div>
  )
}
