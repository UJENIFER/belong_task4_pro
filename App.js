import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
