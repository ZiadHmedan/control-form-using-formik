import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import { Container } from "./ui/Container";
import { SuccessMessage } from "./ui/SuccessMessage";
import { Typography } from "./ui/Typography";
import vector from "./ui/Vector.svg";
function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <SuccessMessage>
          <div className="flex-8">
            <img src={vector} alt="success" />
            <Typography as="h2" $bold $white $size="medium">
              Message Sent!
            </Typography>
          </div>
          <Typography as="p" $white>
            Thanks for completing the form. We’ll be in touch soon!
          </Typography>
        </SuccessMessage>
      )}

      <Container>
        <Typography
          as="h1"
          $bold
          $size="large"
          $lineHeight="tight"
          $letterSpacing="tight"
          style={{ marginBottom: "32px" }}
        >
          Contact Us
        </Typography>
        <RegisterForm handleModal={setModal} />
      </Container>
    </>
  );
}

export default App;
