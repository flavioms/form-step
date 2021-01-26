import React from "react";
import { useFormikContext } from "formik";
import StepAnimated from "../StepAnimated";

function Step3() {
  const { values } = useFormikContext();

  return (
    <StepAnimated>
      <h1>{`${values.firstName} ${values.lastName}`}</h1>
    </StepAnimated>
  );
}

export default Step3;
