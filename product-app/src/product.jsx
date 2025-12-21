import { useState } from 'react';

function Product({ name, price }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 0 && setQuantity(quantity - 1);

  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Unit Price: ${price}</p>
      <div className="quantity-row">
        <button className="qty-btn" onClick={decrement}>-</button>
        <span className="qty-value">{quantity}</span>
        <button className="qty-btn" onClick={increment}>+</button>
      </div>
      <p className="product-subtotal"><strong>Subtotal: ${quantity * price}</strong></p>
    </div>
  );
}

export default Product;