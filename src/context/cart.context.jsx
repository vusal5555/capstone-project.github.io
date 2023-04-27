import { createContext, useEffect, useState } from 'react';

const addCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

const deleteCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }
};

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: null,
  addCartItems: () => {},
  removeCartItems: () => {},
  deleteCartItems: () => {},
  totalPriceValue: 0,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPriceValue, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const addCartItems = productToAdd => {
    setCartItems(addCart(cartItems, productToAdd));
  };

  const removeCartItems = productToRemove => {
    setCartItems(removeCart(cartItems, productToRemove));
  };
  const deleteCartItems = productToRemove => {
    setCartItems(deleteCart(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addCartItems,
    cartCount,
    removeCartItems,
    deleteCartItems,
    totalPriceValue,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
