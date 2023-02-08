import React from "react";
import './InputField.css';

function InputField({ label, value, placeholder, onChange, className, maxLength }) {

  

    return (
      <>    
        <label htmlFor={label}>{label}</label>
        <input
          id={label}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
          maxLength={maxLength}
        />
      </>
    );
  }

  export default InputField