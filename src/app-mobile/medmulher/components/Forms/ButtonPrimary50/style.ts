import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { IButton } from ".";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)<IButton>`
    width: 45%;
    padding: 13px;

    border: 2px;
    border-radius: ${({ theme }) => theme.radius.xs}px;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text `
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
    font-family: "Mulish";
    margin: auto;
`
