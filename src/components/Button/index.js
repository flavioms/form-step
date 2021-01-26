import React from "react";
import { string, func } from "prop-types";
import { Container } from "./styles";

function Button({ label, id, name, onClick, ...props }) {
  return (
    <Container id={id} name={name} onClick={onClick} {...props}>
      {label}
    </Container>
  );
}

Button.propTypes = {
  label: string,
  id: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: func,
};

Button.defaultProps = {
  label: "",
  id: "",
  name: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default Button;
