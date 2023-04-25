import { createContext, useState } from 'react';

const addItemCart = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: null,
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = productToAdd => {
    setCartItems(addItemCart(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
