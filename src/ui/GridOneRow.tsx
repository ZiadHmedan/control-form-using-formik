import styled from "styled-components";
interface prop {
  $styleFor: string;
}
export const GridOneRow = styled.div<prop>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    row-gap: ${({ $styleFor }) => ($styleFor === "radio" ? "16px" : "24px")};
  }
`;
