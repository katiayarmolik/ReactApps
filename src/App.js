import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/admin" element={<AdminPanel />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
