import React, { useState } from 'react';

const AdminPanel = () => {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            const data = await response.json();
            alert('Product added successfully');
            console.log(data);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Admin Panel</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={product.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={product.image}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
};

export default AdminPanel;
