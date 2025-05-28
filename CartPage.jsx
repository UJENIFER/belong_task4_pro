import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import './styles.css';

const sampleProducts = [
  { id: 1, name: "Blue Light Glasses", price: 40 },
  { id: 2, name: "Reading Glasses", price: 35 },
  { id: 3, name: "Sunglasses", price: 50 },
];

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const addToCart = (product) => {
    const updated = [...cart, product];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
  <div className="page-wrapper bg-calm-blue">
    <div className="content-box">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
      ))}

      <button onClick={() => navigate("/checkout")} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Proceed to Checkout
      </button>

      <h2 className="mt-6 font-semibold">Add Items:</h2>
      {sampleProducts.map((product) => (
        <button
          key={product.id}
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-3 py-1 m-1 rounded"
        >
          {product.name} - ${product.price}
        </button>
      ))}
    </div>
  </div>
);

}

export default CartPage;
