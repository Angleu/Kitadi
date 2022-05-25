import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #e5e5e5;
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

export const TopInf = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const ButtonMore = styled.TouchableOpacity`
  border: 1px solid #e8e8e8;
  border-radius: 222222px;
  flex-direction: row;
`;
export const More = styled.Text`
  color: #262626;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 5px;
`;

export const LeftView = styled.View`
  flex: 1;
`;

export const RightView = styled.View`
  align-items: flex-end;
  flex: 1;
`;

export const Box = styled.TouchableOpacity`
  width: 97%;
  height: 200px;

  border-radius: 10px;
  margin-top: 7%;
`;

export const SectionTop = styled.View`
  flex-direction: row;
`;

export const TitleBox = styled.Text`
  color: #262626;
  font-size: 20px;
  font-weight: bold;
  margin-left: 25px;
`;
export const VolBox = styled.Text`
  color: #7a7a7a;
  font-size: 25px;
  font-weight: lighter;
  margin-left: 24px;
`;
export const Bar = styled.View`
  margin-left: 25px;
  margin-top: 5px;
  width: 80%;
`;
export const ImgType = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 20px;
  margin-left: 25px;
`;