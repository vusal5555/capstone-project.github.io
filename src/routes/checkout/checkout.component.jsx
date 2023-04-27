import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';
import Checkoutitem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, totalPriceValue } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => {
        return (
          <Checkoutitem cartItem={cartItem} key={cartItem.id}></Checkoutitem>
        );
      })}
      <span className="total">Total: ${totalPriceValue}</span>
    </div>
  );
};

export default Checkout;
