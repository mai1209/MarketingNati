import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import About from './components/About';
import Banner1 from "./components/Banner1"
import reportWebVitals from './reportWebVitals';
import Advice from './components/Advice';
import Reviews from './components/Reviews';
import Brands from './components/Brands';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Banner1/>
    <About /> 
    <Advice />
    <Reviews/>
    <Brands />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
