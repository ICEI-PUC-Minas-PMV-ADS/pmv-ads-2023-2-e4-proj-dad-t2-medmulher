import React from "react";
import { TouchableOpacityProps } from "react-native";
import theme from "../../../ui/style/theme";
import { Container, Title } from "./style";

export interface IButton extends TouchableOpacityProps {
  title: string;
}

function ButtonSecundary({ title, ...props }: IButton) {
  return (
    <Container {...props} title={title}>
      <Title>{title}</Title>
    </Container>
  );
}

export default ButtonSecundary;
