import React from 'react';
import './Detail.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';


export default function Detail() {
  const { years } = useParams();

  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/detail_'+years+'.jpg'} />
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/button_back.png'} />
      </Link>
    </div>
  )
}
