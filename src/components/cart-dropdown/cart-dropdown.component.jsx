import {
  CartDropdownContainer,
  CartItems,
  EmptyCartText,
} from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('./checkout');
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
          ))
        ) : (
          <EmptyCartText>You cart is empty: {`)`}</EmptyCartText>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
