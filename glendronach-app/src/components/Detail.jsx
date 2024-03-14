import React from 'react';
import './Detail.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';


export default function Detail() {
  const { years } = useParams();

  return (
    <div class="mainImg">
      <img src={process.env.PUBLIC_URL + '/detail_'+years+'.jpg'} alt="mainImg" />
      <Link to="/">
        <div class="back">
        <img src={process.env.PUBLIC_URL + '/button_back.png'} alt="back" />
        </div>
      </Link>
    </div>
  )
}
