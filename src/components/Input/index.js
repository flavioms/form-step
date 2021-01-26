import React from "react";
import { string, func } from "prop-types";

import { Container, Label, InputWrapper, Error } from "./styles";

const Input = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  ...props
}) => {
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
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Input.propTypes = {
  label: string,
  id: string,
  name: string,
  error: string,
  placeholder: string,
  value: string,
  onChange: func,
};

Input.defaultProps = {
  label: "",
  id: "",
  name: "",
  error: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default Input;
