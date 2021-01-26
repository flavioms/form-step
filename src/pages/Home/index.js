import React, { useState, useCallback } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Button from "../../components/Button";
import { Container, WrapperButtons } from "./styles";

const SwitchStep = ({ step }) => {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return null;
  }
};

function Home() {
  const [step, setStep] = useState(1);

  const nextStep = useCallback(() => {
    if (step <= 3) {
      setStep((old) => old + 1);
    }
  }, [step]);

  const prevStep = useCallback(() => {
    if (step > 1) {
      setStep((old) => old - 1);
    }
  }, [step]);

  return (
    <Container>
      <SwitchStep step={step} />
      <WrapperButtons>
        <Button onClick={prevStep} label="Anterior" />
        <Button onClick={nextStep} label="Próximo" />
      </WrapperButtons>
    </Container>
  );
}

export default Home;
