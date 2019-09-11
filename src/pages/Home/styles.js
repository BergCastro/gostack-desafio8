import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
  background: #333;
`;

export const ProductsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  horizontal: true,
})`
  margin-top: 40px;
`;

export const Product = styled.View`
  height: 358px;
  width: 220px;
  background: #fff;
  border-radius: 4px;
  margin-left: 15px;
  padding: 10px;
  flex-direction: column;
`;

export const ImageProduct = styled.Image`
  height: 200px;
  width: 200px;
  background: #eee;
  margin-top: 10px;
`;

export const TitleProduct = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 20px;
  width: 186px;
  color: #333;
  margin-top: 5px;
`;

export const ValueProduct = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-top: 5px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: auto;
  background: #7159c1;
  width: 200px;
  height: 42px;
  border-radius: 4px;
  align-items: center;
  padding: 10px 0;
`;

export const CartAmountButton = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const TextAddButton = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;
