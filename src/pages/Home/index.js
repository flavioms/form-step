import React, { useState, useCallback } from "react";
import { Formik } from "formik";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Button from "../../components/Button";
import { Container, WrapperButtons } from "./styles";
import validation from "./validation";

const SwitchStep = ({ step }) => {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    default:
      return null;
  }
};

function Home() {
  const [step, setStep] = useState(0);

  const nextStep = useCallback(() => {
    if (step <= 2) {
      setStep((old) => old + 1);
    }
  }, [step]);

  const prevStep = useCallback(() => {
    if (step > 0) {
      setStep((old) => old - 1);
    }
  }, [step]);

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={validation[step]}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, actions) => {
          nextStep();
        }}
      >
        {(props) => (
          <form>
            <SwitchStep step={step} />
            <WrapperButtons>
              <Button type="button" onClick={prevStep} label="Anterior" />
              {step !== 2 && (
                <Button
                  type="button"
                  onClick={() => props.handleSubmit()}
                  label={step >= 1 ? "Confirmar" : "Próximo"}
                />
              )}
            </WrapperButtons>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default Home;
