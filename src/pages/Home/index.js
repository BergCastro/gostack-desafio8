import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import '../../config/ReactotronConfig';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Product,
  ProductsList,
  ImageProduct,
  TitleProduct,
  ValueProduct,
  AddButton,
  TextAddButton,
  CartAmountButton,
} from './styles';
import Header from '../../components/Header';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`/products`);

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { navigation, amount } = this.props;

    return (
      <Container>
        <Header navigation={navigation} />
        <ProductsList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ImageProduct source={{ uri: item.image }} />
              <TitleProduct>{item.title}</TitleProduct>
              <ValueProduct>{item.priceFormatted}</ValueProduct>
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
                <CartAmountButton>
                  <Icon
                    name="add-shopping-cart"
                    size={16}
                    color="#FFF"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ color: '#fff' }}>{amount[item.id] || 0}</Text>
                </CartAmountButton>
                <TextAddButton>ADICIONAR</TextAddButton>
              </AddButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
