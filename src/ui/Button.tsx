import styled from "styled-components";
import theme from "../styles/theme";

export const Button = styled.button`
  width: 100%;
background-color: ${theme.colors.darkGreen};
border: none;
padding: 16px 0;
border-radius: 10px;
  color: ${ theme.colors.white};
  cursor: pointer;
  transition: all .5s ease-in-out;
  &:hover, &:focus {
    background-color: ${ theme.colors.darkGreen};
    color: ${ theme.colors.white};
  }
`;