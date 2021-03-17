import React from "react";

// Styles
import { InputBasic } from "./styles";

const InputField = ({ name, value, type, placeholder, onClick }) => {
  return (
    <InputBasic
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onClick={onClick}
    />
  );
};

export default InputField;
