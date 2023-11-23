import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Header = styled.View `
    justify-content: flex-end;
    align-items: center;

    height: ${RFPercentage(2)}%;
    padding-bottom: 16px;
`;

export const Form = styled.View `
    width: 100%;
`;

export const ForgotPassword = styled.Text `
    color: ${({ theme }) => theme.colors.title};   
    
    font-size: ${({ theme }) => RFValue(theme.fonts.obs)}px;
    font-family: "Mulish";
    text-decoration: solid;
    text-decoration-color: aliceblue;

    margin-top: ${({ theme }) => theme.margin.ms}px;
`;

export const Register = styled.Text `
    color: ${({ theme }) => theme.colors.title};   
    
    font-size: ${({ theme }) => RFValue(theme.fonts.obs)}px;
    font-family: "Mulish";
    text-align: center;
    text-decoration: solid;
    text-decoration-color: aliceblue;

    margin-top: ${({ theme }) => theme.margin.ms}px;
`;

export const OrContainer = styled.View `
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const OrLine = styled.View `
    width: ${RFValue(38)}%;
    height: 1px;
    background-color: #000;
`;

export const OrTitle = styled.Text `
    margin: ${({ theme }) => theme.margin.ls}px;
    padding-bottom: ${({ theme }) => theme.padding.ls}px;
    font-size: ${({ theme }) => RFValue(theme.fonts.label)}px;
    font-family: "Mulish";
`;

export const EnterLogin = styled.Text`
    text-align: center;
    font-family: "Mulish";
`;