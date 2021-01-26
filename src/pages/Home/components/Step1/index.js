import React from "react";
import { useFormikContext } from "formik";
import StepAnimated from "../StepAnimated";
import Input from "../../../../components/Input";

function Step1() {
  const { values, errors, handleChange } = useFormikContext();

  return (
    <StepAnimated>
      <Input
        label="Nome"
        id="firstName"
        name="firstName"
        value={values.firstName}
        error={errors.firstName}
        onChange={handleChange}
      />
    </StepAnimated>
  );
}

export default Step1;
