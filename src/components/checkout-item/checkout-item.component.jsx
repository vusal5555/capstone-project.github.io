import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
  CheckoutItemContainer,
  ImgContainer,
  Img,
  Name,
  Price,
  Quantity,
  Increment,
  Decrement,
  RemoveButton,
} from './checkout-item.styles';

const Checkoutitem = ({ cartItem }) => {
  const { addCartItems, removeCartItems } = useContext(CartContext);
  const { deleteCartItems } = useContext(CartContext);

  return (
    <CheckoutItemContainer key={cartItem.id}>
      <ImgContainer>
        <Img src={cartItem.imageUrl} />
      </ImgContainer>
      <Name>{cartItem.name}</Name>
      <Quantity>
        <Increment onClick={() => removeCartItems(cartItem)}>
          &#10094;
        </Increment>{' '}
        {cartItem.quantity}
        <Decrement onClick={() => addCartItems(cartItem)}>&#10095;</Decrement>
      </Quantity>
      <Price className="price">{cartItem.price}$</Price>
      <RemoveButton onClick={() => deleteCartItems(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default Checkoutitem;
