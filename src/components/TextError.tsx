import { StyledTextError } from '../Ui/StyledTextError';

interface TextErrorProps {
  children: string;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return (
    <StyledTextError>
      {children}
    </StyledTextError>
  );
};

export default TextError;
