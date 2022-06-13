import styled from 'styled-components/native';

export const Body = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #444;
  border-radius: 10px;
  /* height: 64px; */
  margin-top: 24px;
  justify-content: space-between;
`;
export const Details = styled.View``;
export const Type = styled.Text`
  font-size: 10px;
  margin-left: 10px;
  margin-top: 14px;
`;
export const Destination = styled.Text`
  font-size: 13px;
  margin-left: 10px;
  font-weight: bold;
`;
export const Amount = styled.Text`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;

`;
export const Avatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 22px;
  margin: 10px;
`;
