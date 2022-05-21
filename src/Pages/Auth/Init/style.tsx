import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 40px 24px;
`
export const Description = styled.Text`
    font-size: 18px;
    color: #545454;
`
export const Title = styled.Text`
    font-size: 26px;
    color: #1D5C63;
    font-weight: bold;
`

export const ImageTop = styled.Image`
    z-index: -999;
    position: absolute;
    top: 0;
`
export const ImageBottom = styled.Image`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -999;


`
export const ContainerButton = styled.View`
    width: 100%;
`;

export const Logo = styled.Image`
    margin-top: 70px;
`