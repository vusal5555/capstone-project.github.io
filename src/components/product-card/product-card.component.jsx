import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './product-card.styles.scss';
import { addCartItems } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const helper = () => dispatch(addCartItems(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={helper}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
