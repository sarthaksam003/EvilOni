import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id, size) => {},
  clearCart: () => {},
});

export default CartContext;
