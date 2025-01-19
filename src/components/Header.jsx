import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>SHOP</h1>
            <div style={styles.cart}>
                🛒 Cart: {cart.length} items
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
};

export default Header;
