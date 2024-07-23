import styled from 'styled-components';
import theme from '../theme';

export const Button = styled.button`
  width: 100%;
  background:${theme.colors.darkGreen};
  
  border: none;
  padding: 16px 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  
  &:hover, &:focus {
      background:${theme.colors.darkGrey};
  }
`;
