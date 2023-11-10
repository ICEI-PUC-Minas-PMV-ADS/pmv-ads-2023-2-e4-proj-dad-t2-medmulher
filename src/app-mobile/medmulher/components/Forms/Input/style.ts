import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TextInput) `
    width: 100%;
    padding: 13px 20px;

    font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
    font-family: "Mulish";
    color: ${({ theme }) => theme.colors.text_dark};

    background-color: ${({ theme }) => theme.colors.background};
    border: 1px;
    border-radius: ${({ theme }) => theme.radius.xs}px;
    border-color: ${({ theme }) => theme.colors.text};
`;