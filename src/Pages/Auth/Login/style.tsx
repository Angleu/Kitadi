import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: #E5E5E5;
    padding: 40px 24px;
`

export const ImageTop = styled.Image`
    position: absolute;
    top: 0;
`
export const ImageBottom = styled.Image`
    position: absolute;
    bottom: 0;
    left: 0;

`
export const ContainerInformation = styled.KeyboardAvoidingView.attrs({
    behavior: 'padding',
})`
    flex: 1;
    width: 100%;
    margin-top: 16px;
`;

export const Title = styled.Text`
    color: #1D5C63;
    font-size:  30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`