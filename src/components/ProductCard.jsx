import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={styles.card}>
            <img src={product.img} alt={product.title} style={styles.img} />
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.description}>{product.descr}</p>
            <p style={styles.price}>${product.price}</p>
            <button style={styles.button} onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '15px',
        textAlign: 'center',
        margin: '10px',
    },
    img: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    title: {
        fontSize: '18px',
        margin: '10px 0',
    },
    description: {
        color: '#555',
        fontSize: '14px',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    button: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default ProductCard;
