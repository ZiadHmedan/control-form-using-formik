import RegisterForm from "./components/RegisterForm";
import { Container, Typography } from "./styles/utils";

const App: React.FC = () => {
  return (
    <Container>
      <Typography
        as="h1"
        $bold
        $size="large"
        $lineHeight="tight"
        $letterSpacing="tight"
      >
        Contact Us
      </Typography>
      
      <RegisterForm/>
    </Container>
  );
};

export default App;