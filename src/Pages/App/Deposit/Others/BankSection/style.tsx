import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerA = styled.View`
  width: 100%;
  flex: 1;
  padding: 24px;
  justify-content: center;
`;
export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.3)'],
  start: {x: 0.0, y: 0.7},
  end: {x: 0, y: 0.0},
})`
  flex: 1;
  padding: 24px;
`;

export const ContainerTop = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  /* margin-top : 30px; */
  color: #000;
  margin-bottom: 40px;
`;

export const PressSubmitContainer = styled.Pressable`
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgba(113, 126, 149, 0.1);
  border-radius: 10px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.284);
  padding: 20px;
`
