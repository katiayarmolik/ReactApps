import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
