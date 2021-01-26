import React from "react";
import { string, func } from "prop-types";

import { Container, Label, InputWrapper } from "./styles";

const Input = ({ label, id, name, placeholder, value, onChange, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <InputWrapper
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};

Input.propTypes = {
  label: string,
  id: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: func,
};

Input.defaultProps = {
  label: "",
  id: "",
  name: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default Input;
