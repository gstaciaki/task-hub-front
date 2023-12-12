import React from 'react';
import './TextField.css';

const TextField = (props) => {
  const { placeholder, type, value, onChange } = props;

  return (
    <input
      className="textInput"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
