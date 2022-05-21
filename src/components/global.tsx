import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 40px 24px;
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

export const Title = styled.Text`
    font-size: 26px;
    color: #1D5C63;
    font-weight: bold;
    margin-bottom: 16px;
`
export const Description = styled.Text`
    color: #262626;
    font-size: 16px;
    text-align: center;
`