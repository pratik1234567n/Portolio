import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './simplecalculator'; 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <Calculator/>  {/* Ensure your Calculator component is properly imported */}
  </React.StrictMode>
);
