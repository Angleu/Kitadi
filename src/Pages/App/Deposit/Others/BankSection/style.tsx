import styled from "styled-components/native"
import LinearGradient from "react-native-linear-gradient"



export const ContainerA = styled.View`
    width:  100%;
    flex: 1;
    padding: 24px;
`
export const Container = styled(LinearGradient).attrs({
    colors: ['rgba(247, 247, 247, 1)', 'rgba(29, 92, 99, 0.3)'],
    start: { x: 0.0, y: 0.7 },
    end: { x: 0, y: 0.0 },
})`
    flex: 1;
    padding: 24px;
   `;

export const ContainerTop = styled.View`
    /* flex: 1; */
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 68px;

`

export const ContainerInput = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    font-size: 18px;
    text-align: center;
    /* margin-top : 30px; */
    color: #000;
    margin-bottom: 68px;


`