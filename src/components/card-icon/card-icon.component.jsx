import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './card-icon.styles.jsx';

import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
