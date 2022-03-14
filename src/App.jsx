import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HistoryPage from './pages/History';
import HomePage from './pages/Home';
import TradePage from './pages/Trade';

export default function App(){
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/trade' element={<TradePage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
        </Routes>
      </div>
    );
}
