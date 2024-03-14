import React from 'react';
import './App.css';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Detail from './components/Detail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:years' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
