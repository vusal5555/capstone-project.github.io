import {
  CartDropdownContainer,
  CartItems,
  EmptyCartText,
} from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useDispatch } from 'react-redux';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckout = () => {
    navigate('./checkout');
    dispatch(setIsCartOpen(false));
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
