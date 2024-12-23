import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999' },
    { id: 2, name: 'Phone', price: '$599' },
    { id: 3, name: 'Tablet', price: '$399' },
  ];

  return (
    <div className="container">
      <Header />
      <main>
        <h1>Welcome to the SHOP</h1>
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;
