import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Header = styled.View`
    justify-content: flex-end;
    align-items: center;

    height: ${RFPercentage(2)}%;
    padding-bottom: 16px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fonts.title}px;
    font-family: "Mulish";
    textAlign: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    font-family: "Mulish";
    textAlign: center;
`;

export const Card = styled.View`
    width: 300px;
    padding: 20px;
    margin: 15px;
    borderWidth: 2px;
    borderRadius: 10px;
    borderColor: #8D4698;
`;