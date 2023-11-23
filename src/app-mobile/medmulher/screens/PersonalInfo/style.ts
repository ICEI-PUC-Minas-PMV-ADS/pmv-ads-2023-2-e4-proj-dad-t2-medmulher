import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Form = styled.View `
    width: 100%;
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    font-family: "Mulish";
`;

export const OrContainer = styled.View `
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const OrLine = styled.View `
    width: ${RFValue(312)}%;
    height: 1px;
    background-color: #000;
`;

export const OrTitle = styled.Text `
    margin: ${({ theme }) => theme.margin.ls}px;
    padding-bottom: ${({ theme }) => theme.padding.ls}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
    font-family: "Mulish";
`;

export const Title = styled.Text `
    font-size: ${({ theme }) => theme.fonts.title}px;
    font-family: "Mulish";
    font-weight: 500;
    color: ${({ theme }) => theme.colors.title};
`;