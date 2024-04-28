import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/LoginForm';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
