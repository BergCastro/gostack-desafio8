import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
  background: #333;
`;
export const CartContainer = styled.View`
  flex-direction: column;
  margin-top: 40px;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
`;

export const ItemContainer = styled.View`
  flex-direction: column;
  padding: 5px;
`;

export const DescriptionItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageItem = styled.Image`
  height: 80px;
  width: 80px;
`;

export const TitleValueItem = styled.View`
  flex: 1;
  height: 80px;
`;

export const TitleItem = styled.Text`
  font-size: 14px;
`;

export const ValueItem = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
`;

export const ButtonDeleteItem = styled.TouchableOpacity``;

export const FooterItem = styled.View`
  flex-direction: row;
  background: #eee;
  padding: 10px;
  height: 40px;
  border-radius: 4px;
`;

export const ButtonControlItem = styled.TouchableOpacity``;

export const AmountItem = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  min-height: 26px;
`;

export const SubtotalItem = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalCart = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;

export const TextTotalCart = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #999;
`;

export const ValueTotalCart = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-top: 5px;
`;

export const ButtonCart = styled.TouchableOpacity`
  background: #7159c1;
  height: 42px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 4px;
`;

export const TextButtonCart = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;
