import styled from 'styled-components/native';

export const Content = styled.View`
  height: 250px;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  /* justify-content: space-between; */
  /* padding: 40px 24px; */
`;
export const ContainerA = styled.View`
  width: 100%;
  flex: 1;
  padding: 24px;
  align-content: center;
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
  width: 100%;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: #1d5c63;
  font-size: 24px;
  font-weight: bold;
  /* padding-top: 8px; */
`;
export const TitleTop = styled.Text`
  color: #1d5c63;
  font-size: 28px;
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

export const TopContentTitle = styled.View`
  margin-bottom: 30px;
  width: 100%;
`;

export const Icons = styled.View`
  flex-direction: row;
`;
export const TopInf = styled.View`
  flex: 1;
`;

export const LeftView = styled.View`
  flex: 1;
  flex-basis: 0%;
`;

export const LeftViewTop = styled.View`
  margin-right: 20px;
  margin-top: 30px;
  align-items: center;
  flex: 0.1;
`;
export const RightViewTop = styled.View`
  margin-left: 20px;
  margin-top: 30px;
  align-items: center;
  flex: 0.1;
`;
export const ContentRow = styled.View`
  flex-direction: row;
  text-align: center;
  width: 100%;
  justify-content: space-between;
`;

export const CenterTitle = styled.View`
  width: 85%;
  align-items: center;
`;
export const CenterTitleTop = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Information = styled.View`
  flex: 1;
  text-align: center;
`;

export const RightView = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const ButtonConf = styled.TouchableOpacity`
  border: 1px solid #fff;
  border-radius: 30px;
  padding: 5px;
`;
export const ButtonBack = styled.TouchableOpacity`
  border-radius: 30px;

  /* padding: 5px; */
  /* align-self: flex-start; */
`;
export const CenterHead = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SectionTop = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 60px;
  margin-right: 60px;
`;

export const Icon = styled.Image`
  width: 42px;
  height: 42px;
`;
