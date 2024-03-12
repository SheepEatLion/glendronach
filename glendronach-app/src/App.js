import React from 'react';
import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './src/components/HomePage';
import DetailPage from './src/components/DetailPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
