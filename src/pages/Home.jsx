import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    if (loading) {
        return <p style={{ textAlign: 'center' }}>Loading products...</p>;
    }

    return (
        <div style={styles.container}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={{
                        id: product.id,
                        title: product.title,
                        img: product.image,
                        descr: product.description,
                        price: product.price,
                    }}
                />
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
    },
};

export default Home;
