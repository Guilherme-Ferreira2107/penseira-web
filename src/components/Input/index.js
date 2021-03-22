import React, { forwardRef } from "react";

// Styles
import { InputBasic } from "./styles";

const InputField = forwardRef((props, ref) => {
  const {
    name,
    value,
    type,
    placeholder,
    onChange,
    maxLength,
    required,
  } = props;
  return (
    <InputBasic
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      maxLength={maxLength}
      required={required}
    />
  );
});

export default InputField;
