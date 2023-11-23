import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Form = styled.View `
    width: 100%;
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    font-family: "Mulish";
`;