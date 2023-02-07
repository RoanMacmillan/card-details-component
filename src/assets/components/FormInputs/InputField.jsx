import React from "react";
import './InputField.css';

function InputField({ label, value, placeholder, onChange, className }) {


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
        />
      </>
    );
  }

  export default InputField