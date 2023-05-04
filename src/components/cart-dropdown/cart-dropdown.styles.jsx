import styled from 'styled-components';
import { BaseButton, GoogleSignIn, Inverted } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignIn},
  ${Inverted} {
    margin: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyCartText = styled.span`
  text-align: center;
  font-size: 16px;
  margin-top: 50px;
`;
