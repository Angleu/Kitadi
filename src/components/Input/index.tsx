import React,{useState} from "react";
import {NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { Container, InputText } from "./style";


interface IInput {
    placeholder: string;
    value: string;
    onChange?: ((text: string) => void) | undefined
    autoComplete: "name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off" | undefined
}

const Input: React.FC<IInput> = ({ onChange, autoComplete, value, placeholder }) => {
    return (
        <Container>
            <InputText autoCompleteType={autoComplete} onChangeText={onChange} value={value}
                placeholder={placeholder} 
            />
        </Container>
    )
}

export default Input;