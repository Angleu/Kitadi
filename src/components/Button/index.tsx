import React from "react";
import { GestureResponderEvent } from "react-native";
import { Container, Text } from "./style";


interface IButton {
    outline: boolean;
    text: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Button: React.FC<IButton> = ({ text, outline, onPress }) => {
    return (
        <Container outline={outline} onPress={onPress}>
            <Text outline={outline}>{text}</Text>
        </Container>
    )
}

export default Button;