import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const OrContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const OrLine = styled.View`
    width: ${RFValue(312)}%;
    height: 1px;
    background-color: #dddddd;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fonts.titlecar}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
`;

export const Card = styled.View`
    border: 1px solid #EEE;
    border-radius: 8px;
    padding: 16px 20px;
    width: 100%;
    background: #FFF;
`;