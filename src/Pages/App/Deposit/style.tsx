import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px 24px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
`;

export const TopContentTitle = styled.View`

  /* flex: 1; */
  margin-top: 78px;
  margin-bottom: 71px;
  width: 100%;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
`;
export const ContentRow = styled.View`
  flex-direction: row;
  text-align: center;
  width: 100%;
`;

export const CenterTitle = styled.View`
  width: 100%;
  align-items: center;
`;
export const CenterTitleTop = styled.View`
  /* align-items: center; */
  /* justify-content: center; */
  flex: 1;
  width: 100%;

`;

export const TitleTop = styled.Text`
  color: #1d5c63;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  align-self: center;
`;

export const LabelBank = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #1d5c63;
`;
export const ContentBank = styled.View`
  width: 100%;
`;
export const Pressable = styled.TouchableOpacity``;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(113, 126, 149, 0.1);
  border-radius: 10px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.284);
`;

export const ContentButton = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  /* margin-bottom: 30px; */

`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: rgba(29, 92, 99, 1);
  border-radius: 10px;
  color: #fff;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid rgba(29, 92, 99, 1);
`;
export const ButtonInline = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(29, 92, 99, 1);
  border-radius: 10px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RowInput = styled.View`
  flex-direction: row;
  width: 100%;
`;
export const View = styled.View`
  width: 100%;
`;
export const ViewDeposit = styled.View`
  width: 76%;
  margin-right: 4%;
`;
export const ViewCoin = styled.View`
  width: 20%;
`;
export const ViewDateEx = styled.View`
  width: 72%;
  margin-right: 3%;
`;

export const ViewCvv = styled.View`
  width: 25%;
`;
