import styled, { DefaultTheme } from "styled-components";
import theme from "../theme";

interface TextProps {
  $bold?: boolean;
  $size?: "base" | "medium" | "large";
  $lineHeight?: "normal" | "tight";
  $letterSpacing?: "normal" | "tight";
  $white?: boolean;
}



const getFontSize = (size: TextProps["$size"], theme: DefaultTheme) => {
  return theme.typography.sizes[size || "base"];
};
const getLineHeight = (
  lineHeight: TextProps["$lineHeight"],
  theme: DefaultTheme
) => {
  return theme.typography.lineHeights[lineHeight || "normal"];
};
const getLetterSpacing = (
  letterSpacing: TextProps["$letterSpacing"],
  theme: DefaultTheme
) => {
  return theme.typography.letterSpacings[letterSpacing || "normal"];
};
const getFontWeight = (bold: TextProps["$bold"], theme: DefaultTheme) => {
  return bold ? theme.typography.weights.bold : theme.typography.weights.normal;
};




export const Typography = styled.div<TextProps>`
  font-weight: ${props => getFontWeight(props.$bold, theme)};
  font-size: ${props => getFontSize(props.$size, theme)};
  line-height: ${props => getLineHeight(props.$lineHeight, theme)};
  letter-spacing: ${props => getLetterSpacing(props.$letterSpacing, theme)};
  color: ${props =>
    props.$white ? theme.colors.white : theme.colors.darkGrey};
`;
