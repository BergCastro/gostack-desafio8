import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  flex-direction: row;
  height: 24px;
`;

export const CartAmount = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 12px;
  margin-bottom: 10px;
`;

export const Amount = styled.Text`
  font-size: 12px;
  color: #fff;
`;
