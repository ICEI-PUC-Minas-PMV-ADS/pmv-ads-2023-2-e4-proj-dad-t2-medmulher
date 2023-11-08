import styled from 'styled-components/native'

export const Container = styled.Text`
    font-size: ${({ theme }) => theme.fonts.label}px;
    margin-bottom: ${({ theme }) => theme.margin.ls}px;
    font-family: "Mulish";
`;