import styled from "styled-components";
import theme from "../theme";
interface prop {
  type: string;
  $unValid: boolean;
}
export const StyledInput = styled.div<prop>`
margin-top: 8px;
  border: 2px solid
    ${({ $unValid }) =>
      $unValid ? theme.colors.error : theme.colors.lightGrey};
  font-size: ${theme.typography.sizes.medium};
  color: ${({ $unValid }) =>
    $unValid ? theme.colors.error : theme.colors.darkGrey};
  padding: ${({ type }) => (type === "textarea" ? "12px" : "0")} 24px;

  border-radius: 2px;
  width: 100%;
  height: 51px;
  border-radius: 10px;
  transition: all 0.1s ease-in;
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.darkGreen};
  }
`;
