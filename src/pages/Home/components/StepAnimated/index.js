import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

function StepAnimated({ children }) {
  return (
    <Container
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </Container>
  );
}

StepAnimated.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default React.memo(StepAnimated);
