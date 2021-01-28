import React from "react";
import { useFormikContext } from "formik";
import StepAnimated from "../StepAnimated";
import Input from "../../../../components/Input";

function Step2() {
  const { values, errors, handleChange } = useFormikContext();

  return (
    <StepAnimated>
      <h1>Informe seu sobrenome:</h1>
      <Input
        id="lastName"
        name="lastName"
        value={values.lastName}
        error={errors.lastName}
        onChange={handleChange}
      />
    </StepAnimated>
  );
}

export default Step2;
