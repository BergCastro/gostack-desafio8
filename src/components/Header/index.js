import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { Container, Logo, Cart, CartAmount, Amount } from './styles';

class Header extends Component {
  handleNavigate = route => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    const { cartSize } = this.props;
    return (
      <Container>
        <TouchableHighlight
          onPress={() => {
            this.handleNavigate('Home');
          }}
        >
          <Logo />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.handleNavigate('Cart');
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
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
