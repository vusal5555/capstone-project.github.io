import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reduce/reduce.utils';

export const setIsCartOpen = bool =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

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

export const addCartItems = (cartItems, productToAdd) => {
  // setCartItems(addCart(cartItems, productToAdd));
  const newCartItems = addCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItems = (cartItems, productToRemove) => {
  // setCartItems(removeCart(cartItems, productToRemove));
  const newCartItems = removeCart(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteCartItems = (cartItems, productToRemove) => {
  // setCartItems(deleteCart(cartItems, productToRemove));
  const newCartItems = deleteCart(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
