import React from "react";
import StepAnimated from "../StepAnimated";
import Input from "../../../../components/Input";

function Step1() {
  return (
    <StepAnimated>
      <Input label="Nome" id="firstName" name="firstName" />
    </StepAnimated>
  );
}

export default Step1;
