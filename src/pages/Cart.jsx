import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    if (cart.length === 0) {
        return <p style={{ textAlign: 'center' }}>Your cart is empty.</p>;
    }

    return (
        <div style={styles.container}>
            {cart.map((item) => (
                <div key={item.id} style={styles.item}>
                    <img src={item.img} alt={item.title} style={styles.img} />
                    <div style={styles.details}>
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                        <div style={styles.quantity}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button style={styles.remove} onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    item: {
        display: 'flex',
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
    },
    img: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
    },
    details: {
        marginLeft: '10px',
        flex: 1,
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    remove: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
    },
};

export default Cart;
