import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import '../../config/ReactotronConfig';
import { formatPrice } from '../../util/format';
import { addToCartRequest } from '../../store/modules/cart/actions';
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

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }

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
            <AddButton onPress={() => handleAddProduct(item.id)}>
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
