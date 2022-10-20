import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
