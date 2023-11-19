import React from "react";
import { TextInputProps } from "react-native";
import { Container } from './style';

type IInput = TextInputProps;

function Input({...props}: IInput) {
    return (
        <Container {...props}/>
    )
}

export default Input;

