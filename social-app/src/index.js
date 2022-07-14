import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Navigation from './UI/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
