import styled from 'styled-components/native';

export const Body = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  border: 1px solid rgba(45, 103, 109, 1);
  border-radius: 10px;
  background-color: rgba(238, 234, 234, 0.367);
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled.View`
  margin-left: 20px;
  margin-right: 25px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: rgba(45, 103, 109, 1);
`;
