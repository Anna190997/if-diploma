import React from 'react';

const Input = ({ type_input, inputClass, inputPlaceholder, onChange }) => {
  return <input type={type_input} className={inputClass} placeholder={inputPlaceholder} onChange={onChange} required={true} />;
};

export default Input;
