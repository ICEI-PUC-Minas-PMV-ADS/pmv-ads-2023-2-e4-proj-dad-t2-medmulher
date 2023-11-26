import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'

export const Form = styled.View `
    width: 100%;
`;

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    font-family: "Mulish";
`;


export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fonts.title}px;
    font-family: "Mulish";
`;