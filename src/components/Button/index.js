import React from "react";

// Styles
import { ButtonBasic } from "./styles";

const Button = ({ value, type, color, background, border, onClick }) => {
  return (
    <ButtonBasic
      value={value}
      type={type}
      color={color}
      background={background ? background : border}
      border={border}
      onClick={onClick}
    />
  );
};

export default Button;
