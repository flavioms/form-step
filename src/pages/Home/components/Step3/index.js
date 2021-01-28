import React from "react";
import { useFormikContext } from "formik";
import StepAnimated from "../StepAnimated";

function Step3() {
  const { values } = useFormikContext();

  return (
    <StepAnimated>
      <h1>Nome Completo:</h1>
      <h2>{`${values.firstName} ${values.lastName}`}</h2>
    </StepAnimated>
  );
}

export default Step3;
