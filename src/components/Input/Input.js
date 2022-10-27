import React from 'react';

const Input = ({ type_input, inputClass, inputPlaceholder, onChange, value }) => {
  return (
    <input
      type={type_input}
      className={inputClass}
      placeholder={inputPlaceholder}
      onChange={onChange}
      value={value}
      required={true}
    />
  );
};

export default Input;
