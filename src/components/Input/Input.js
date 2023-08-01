import React from "react";
import "./Input.css";

const Input = ({ name, value, onChange, type = "text" }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      name={name}
      placeholder={name}
      type={type}
    />
  );
};

export default Input;
