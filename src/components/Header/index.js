import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Logo, Cart, CartAmount, Amount } from './styles';

export default function Header({ navigation }) {
  function handleNavigate(route) {
    navigation.navigate(route);
  }

  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <TouchableHighlight
        onPress={() => {
          handleNavigate('Home');
        }}
      >
        <Logo />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          handleNavigate('Cart');
        }}
      >
        <Cart>
          <Icon
            name="shopping-basket"
            style={{ marginTop: 6 }}
            size={20}
            color="#FFF"
          />
          <CartAmount>
            <Amount>{cartSize || 0}</Amount>
          </CartAmount>
        </Cart>
      </TouchableHighlight>
    </Container>
  );
}
