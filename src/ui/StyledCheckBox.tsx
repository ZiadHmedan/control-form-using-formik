import styled from "styled-components";
import theme from "../theme";

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  /* margin-top: 40px; */
  & > input {
    height: 18px;
    width: 18px;
    appearance: none;
    border: 2px solid ${theme.colors.darkGrey};
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    
    &:checked {
      background-color: ${theme.colors.darkGreen};
      border-color: ${theme.colors.darkGreen};
    }

    &:checked::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;
