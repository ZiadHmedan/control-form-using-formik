import { StyledTextError } from "../ui/StyledTextError";

interface TextErrorProps {
  children: string;
}

const TextError = ({ children }:TextErrorProps) => {
  return <StyledTextError>{children}</StyledTextError>;
};

export default TextError;
