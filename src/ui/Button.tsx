import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  cursor: pointer;
  transition: all .5s ease-in-out;
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.green600};
  }
`;