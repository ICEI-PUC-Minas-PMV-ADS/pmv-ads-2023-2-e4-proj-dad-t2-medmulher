import styled from "styled-components/native";

export const NavBar = styled.View`
    width: 100%;
    flex-direction: row; 
    justify-content: space-around; 
    padding: 8px;
    border-top-width: 2px;
    border-top-color: ${({theme}) => theme.colors.navbar};
`;