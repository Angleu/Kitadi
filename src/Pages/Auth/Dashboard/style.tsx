import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 40px 24px;
`;

export const ImageTop = styled.Image`
  position: absolute;
  top: 0;
`;
export const ImageBottom = styled.Image`
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const ContainerInformation = styled.View`
  width: 95%;
  margin-top: 20px;
  margin-left: 3%;
`;

export const Title = styled.Text`
  color: #1d5c63;
  font-size: 24px;
  font-weight: bold;
  padding-top: 8px;
`;

export const AmountTop = styled.Text`
  color: #262626;
  font-size: 40px;
  font-weight: 400;
  padding-top: 8px;
  text-align: center;
  font-family: 'Inter';
`;

export const ButtonVer = styled.TouchableOpacity`
  background-color: #2d676d;
  border: 1px solid #262626;
  border-radius: 22px;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Detail = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding-top: 2px;
  padding-left: 10px;
`;
export const TopContent = styled.View`
  flex: 0.3;
  width: 100%;
`;
export const TopInf = styled.View`
  flex: 1;
`;

export const LeftView = styled.View`
  flex: 1;
  flex-basis: 0%;
`;

export const RightView = styled.View`
  align-items: flex-end;
  flex: 1;
`;
export const RightViewTop = styled.View`
  align-items: flex-end;
  flex: 0.1;
`;
export const ButtonConf = styled.TouchableOpacity`
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 5px;
`;
export const CenterHead = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SectionTop = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;
