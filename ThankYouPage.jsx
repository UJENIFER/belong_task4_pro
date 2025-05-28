import React from "react";
import './styles.css';

function ThankYouPage() {
  const order = JSON.parse(localStorage.getItem("order"));

  return (
  <div className="page-wrapper bg-lavender-mist">
    <div className="content-box">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p>We've received your order. Here's a summary:</p>
      <p><strong>Name:</strong> {order.name}</p>
      <p><strong>Address:</strong> {order.address}</p>
      <p><strong>Contact:</strong> {order.contact}</p>
      <ul className="mt-4 list-disc pl-5 text-left">
        {order.cart.map((item, idx) => (
          <li key={idx}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p className="mt-4 font-bold text-lg">Total Paid: ${order.total}</p>
    </div>
  </div>
);

}

export default ThankYouPage;
