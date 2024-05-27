// ProductListing.jsx
import React from 'react';
import Product from './Product';

function ProductListing() {
  const products = [
    { id: 1, title: 'Product 1', image: 'product1.jpg', price: 20.99 },
    { id: 2, title: 'Product 2', image: 'product2.jpg', price: 30.99 },
    { id: 2, title: 'Product 2', image: 'product2.jpg', price: 30.99 }, 
    // Add more products as needed
  ];

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
