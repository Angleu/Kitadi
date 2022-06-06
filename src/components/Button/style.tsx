import styled from "styled-components/native";


interface IButton {
    outline: boolean;
}

export const Container = styled.TouchableOpacity<IButton>`
    width: 100%;
    height: 40px;
    background-color:${(props) => props.outline ? '#fff' : '#1D5C63'};
    /* padding: 18px 0px; */
    border-radius: 10px;
    border: 1px solid #1D5C63;
    /* margin-top: 10px; */
    justify-content: center;
`

export const Text = styled.Text<IButton>`
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.outline ? '#1D5C63' : '#fff'};
    text-transform: uppercase;
    
`
