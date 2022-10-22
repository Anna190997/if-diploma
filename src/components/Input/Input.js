import React from 'react';

const Input = ({ type_input, inputClass, inputPlaceholder }) => {
  return <input type={type_input} className={inputClass} placeholder={inputPlaceholder} />;
};

export default Input;
