import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const Checkoutitem = ({ cartItem }) => {
  const { addCartItems, removeCartItems } = useContext(CartContext);
  const { deleteCartItems } = useContext(CartContext);

  return (
    <div className="checkout-item-container" key={cartItem.id}>
      <div className="image-container">
        <img src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <span className="increment" onClick={() => addCartItems(cartItem)}>
          &#10094;
        </span>{' '}
        {cartItem.quantity}
        <span className="decrement" onClick={() => removeCartItems(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">{cartItem.price}$</span>
      <div className="remove-button" onClick={() => deleteCartItems(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default Checkoutitem;
