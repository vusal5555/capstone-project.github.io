import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const helper = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button buttonType="inverted" onClick={helper}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
