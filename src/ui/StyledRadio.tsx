import styled from "styled-components";
import theme from "../theme";

interface Prop {
  $active: boolean;
}

export const StyledRadio = styled.div<Prop>`
  border: 2px solid ${theme.colors.lightGrey};
  border-radius: 10px;
  width: 100%;
  height: 51px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease-in;
  margin-bottom: 8px;
  &:hover {
    border: 2px solid ${theme.colors.darkGreen};
  }

  & > input {
    width: 24px;
    height: 24px;
    appearance: none;
    border: 2px solid ${theme.colors.darkGreen};
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &:checked {
      border: 2px solid ${theme.colors.darkGreen};
    }

    &:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${theme.colors.darkGreen};
    }
  }
`;
