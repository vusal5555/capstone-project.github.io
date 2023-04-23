import './card-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
