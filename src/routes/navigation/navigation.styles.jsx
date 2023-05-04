import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
