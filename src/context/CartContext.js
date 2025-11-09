import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.productId === product.productId);
      if (exists) {
        return prev.map((p) =>
          p.productId === product.productId
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.productId !== id));
  };

  const updateQty = (id, type) => {
    setCartItems(prev =>
      prev.map(p =>
        p.productId === id
          ? { ...p, quantity: type === "inc" ? p.quantity + 1 : Math.max(1, p.quantity - 1) }
          : p
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};
