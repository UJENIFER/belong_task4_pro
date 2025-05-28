import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

function CheckoutPage() {
  const [form, setForm] = useState({ name: "", address: "", contact: "", discount: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const discount = form.discount === "SAVE10" ? 0.1 : 0;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const discountedTotal = (total * (1 - discount)).toFixed(2);

    const order = { ...form, cart, total: discountedTotal };
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.removeItem("cart");

    navigate("/thankyou");
  };

  return (
  <div className="page-wrapper bg-ice-lavender">
    <div className="content-box">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Name" />
        <input type="text" name="address" value={form.address} onChange={handleChange} required placeholder="Address" />
        <input type="text" name="contact" value={form.contact} onChange={handleChange} required placeholder="Contact Number" />
        <input type="text" name="discount" value={form.discount} onChange={handleChange} placeholder="Discount Code (SAVE10)" />
        <button type="submit">Place Order</button>
      </form>
    </div>
  </div>
);

}

export default CheckoutPage;
