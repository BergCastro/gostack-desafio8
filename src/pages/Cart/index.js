import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  CartContainer,
  ItemContainer,
  ImageItem,
  DescriptionItem,
  TitleItem,
  FooterItem,
  TotalCart,
  TextTotalCart,
  ValueTotalCart,
  ButtonCart,
  TextButtonCart,
  TitleValueItem,
  ValueItem,
  ButtonControlItem,
  AmountItem,
  SubtotalItem,
  ButtonDeleteItem,
} from './styles';
import Header from '../../components/Header';

export default function Cart({ navigation }) {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispacth = useDispatch();

  function increment(product) {
    dispacth(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispacth(updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <Header navigation={navigation} />
      <CartContainer>
        {cart.map(product => (
          <ItemContainer key={product.id}>
            <DescriptionItem>
              <ImageItem source={{ uri: product.image }} />
              <TitleValueItem>
                <TitleItem>{product.title}</TitleItem>
                <ValueItem>{product.priceFormatted}</ValueItem>
              </TitleValueItem>
              <ButtonDeleteItem onPress={() => removeFromCart(product.id)}>
                <Icon
                  name="delete-forever"
                  size={18}
                  color="#7159c1"
                  style={{ marginLeft: 'auto', marginRight: 5 }}
                />
              </ButtonDeleteItem>
            </DescriptionItem>
            <FooterItem>
              <ButtonControlItem onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ButtonControlItem>
              <AmountItem value={String(product.amount)} />
              <ButtonControlItem onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ButtonControlItem>
              <SubtotalItem>{product.subtotal}</SubtotalItem>
            </FooterItem>
          </ItemContainer>
        ))}
        <TotalCart>
          <TextTotalCart>TOTAL</TextTotalCart>
          <ValueTotalCart>{total}</ValueTotalCart>
        </TotalCart>
        <ButtonCart>
          <TextButtonCart>FINALIZAR PEDIDO</TextButtonCart>
        </ButtonCart>
      </CartContainer>
    </Container>
  );
}
