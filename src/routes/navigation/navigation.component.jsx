import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/crown.svg';
import {
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
  NavLink,
} from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectUser } from '../../store/user/user_selector';
import { SignOutUser } from '../../utils/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  const currentUser = useSelector(selectUser);
  // const { currentUser } = useContext(UserContext);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <ReactLogo className="logo"></ReactLogo>
        </LogoContainer>
        <NavLinksContainer>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <NavLink as="span" onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}

          <CardIcon></CardIcon>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
