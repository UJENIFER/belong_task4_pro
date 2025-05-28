import React from "react";

const CartItem = ({ item, onRemove }) => (
  <div className="p-4 border rounded flex justify-between mb-2">
    <div>
      <h2 className="font-semibold">{item.name}</h2>
      <p>${item.price}</p>
    </div>
    <button onClick={() => onRemove(item.id)} className="bg-red-600 text-white px-2 py-1 rounded">
      Remove
    </button>
  </div>
);

export default CartItem;
