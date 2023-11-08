import React from "react";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";
import theme from "../../../ui/style/theme";
import { Container } from "./style";
import Label from "../Label";

//Icons
import Icon from "@expo/vector-icons/Ionicons";

export interface IBackButton extends TouchableOpacityProps {
  onClick: () => void;
}

function ButtonReturnLeft({ onClick }: IBackButton) {
  return (
    <Container onPress={onClick}>
      <Icon name="chevron-back-outline" size={30} color="#767676" />
    </Container>
  );
}

export default ButtonReturnLeft;
