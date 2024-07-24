import styled from "styled-components";
import theme from "../theme";

export const Container = styled.div`
  max-width: 763px;

  padding: 4rem;
  background-color: ${theme.colors.white};
  margin: 0 auto;
  border-radius: 10px;
  @media (max-width: 440px) {
    margin: 0 16px;
  }
`;
