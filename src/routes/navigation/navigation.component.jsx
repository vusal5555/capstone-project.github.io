import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as ReactLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { SignOutUser } from '../../utils/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
