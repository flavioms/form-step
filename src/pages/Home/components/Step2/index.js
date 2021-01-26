import React from "react";
import StepAnimated from "../StepAnimated";
import Input from "../../../../components/Input";

function Step2() {
  return (
    <StepAnimated>
      <Input label="Sobrenome" id="lastName" name="lastName" />
    </StepAnimated>
  );
}

export default Step2;
