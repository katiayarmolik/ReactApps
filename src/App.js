import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
