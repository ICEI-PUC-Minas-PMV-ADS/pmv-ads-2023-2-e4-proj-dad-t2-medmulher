import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ViewContainer = styled.ScrollView`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
`;

export const LogoContainer = styled.Image`
  margin: auto;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.title}px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;
`;

export const Page = styled.Text`
  font-family: "Mulish";
  font-size: ${({ theme }) => theme.fonts.subtitle}px;
  font-weight: 700;
`;
