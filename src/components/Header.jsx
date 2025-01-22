import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>
                <Link to="/" style={styles.link}>SHOP</Link>
            </h1>
            <div style={styles.cart}>
                <Link to="/cart" style={styles.link}>
                    🛒 Cart: {cart.length} items
                </Link>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#434343',
        borderBottom: '1px solid #ddd',
    },
    logo: {
        margin: 0,
    },
    cart: {
        fontWeight: 'bold',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
};

export default Header;
