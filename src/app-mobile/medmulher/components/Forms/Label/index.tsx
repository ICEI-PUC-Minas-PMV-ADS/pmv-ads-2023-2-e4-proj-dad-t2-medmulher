import React from "react";
import { Container } from "./style";

export interface ILabel {
  title: string;
}

function Label({ title }: ILabel) {
  return (
    <Container>
      {title}
    </Container>
  );
}

export default Label;
