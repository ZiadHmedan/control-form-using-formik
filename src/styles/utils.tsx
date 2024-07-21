import styled, { DefaultTheme } from "styled-components";
import theme from "./theme";
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

export const Container = styled.div`
  max-width: 763px;
  padding: 4rem;
  background-color: ${theme.colors.white};
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
export const Typography = styled.div<TextProps>`
display: block;
/* background-color: red; */

  font-weight: ${props => getFontWeight(props.$bold, theme)};
  font-size: ${props => getFontSize(props.$size, theme)};
  line-height: ${props => getLineHeight(props.$lineHeight, theme)};
  letter-spacing: ${props => getLetterSpacing(props.$letterSpacing, theme)};
  color: ${props => (props.$white ? theme.colors.white : theme.colors.darkGrey)};
`;


export const GridOneRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;
export const StyledErrorMsg = styled.div`
color: ${theme.colors.error};
margin-top: 8px;
`;

export const StyledButton = styled.button``;
