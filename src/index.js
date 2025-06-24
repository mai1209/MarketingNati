import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

import Footer from './components/Footer';
import Banner1 from "./components/Banner1"
import reportWebVitals from './reportWebVitals';
//import Advice from './components/Advice';
//import Reviews from './components/Reviews';
import Brands from './components/Brands';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Banner1 />
    <Brands/>
      <Footer />
     

 
   
  </React.StrictMode>
);

reportWebVitals();
