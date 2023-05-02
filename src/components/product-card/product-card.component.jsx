import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './product-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addCartItems } = useContext(CartContext);

  const helper = () => addCartItems(product);
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
