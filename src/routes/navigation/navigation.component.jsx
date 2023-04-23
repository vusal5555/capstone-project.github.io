import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { SignOutUser } from '../../utils/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ReactLogo className="logo"></ReactLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CardIcon></CardIcon>
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
