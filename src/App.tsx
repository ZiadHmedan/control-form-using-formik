import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import { Container } from "./Ui/Container";
import { SuccessMessage } from "./Ui/SuccessMessage";
import { Typography } from "./Ui/Typography";
import vector from "./Ui/Vector.svg";
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
