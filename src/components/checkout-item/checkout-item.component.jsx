import {
  addCartItems,
  removeCartItems,
  deleteCartItems,
} from '../../store/cart/cart.action';
import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
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
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  return (
    <CheckoutItemContainer key={cartItem.id}>
      <ImgContainer>
        <Img src={cartItem.imageUrl} />
      </ImgContainer>
      <Name>{cartItem.name}</Name>
      <Quantity>
        <Increment
          onClick={() => dispatch(removeCartItems(cartItems, cartItem))}
        >
          &#10094;
        </Increment>{' '}
        {cartItem.quantity}
        <Decrement onClick={() => dispatch(addCartItems(cartItems, cartItem))}>
          &#10095;
        </Decrement>
      </Quantity>
      <Price className="price">{cartItem.price}$</Price>
      <RemoveButton
        onClick={() => dispatch(deleteCartItems(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default Checkoutitem;
