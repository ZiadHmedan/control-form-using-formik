import styled from "styled-components";
import theme from "../styles/theme";
interface TypeProp {
  $high?:boolean
}
export const StyledInput = styled.input<TypeProp>`
  border: 1px solid ${theme.colors.lightGrey};
  border-radius: 2px;
  width: 100%;
  height: ${props => (props.$high ? "105px" : "51px")};
  border-radius: 10px;
`;