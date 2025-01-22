import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>
                <Link to="/" style={styles.link}>SHOP</Link>
            </h1>
            <div>
                <Link to="/cart" style={styles.link}>
                    🛒 Cart: {cart.length} items
                </Link>
                {isAuthenticated ? (
                    <button style={styles.button} onClick={logout}>Logout</button>
                ) : (
                    <Link to="/login" style={styles.link}>
                        <button style={styles.button}>Login</button>
                    </Link>
                )}
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
    link: {
        textDecoration: 'none',
        color: 'white',
        marginRight: '10px',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default Header;
