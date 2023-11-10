import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { IBackButton } from ".";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)<IBackButton>`
    width: 40px;
    padding: 0px;
    margin-left: -10px;

    border: 2px;
    border-radius: ${({ theme }) => theme.radius.xs}px;
    border-color: transparent;
    background-color: "transparent";
`;
