import React from 'react'
import InputField from './InputField'
import './InputField.css';

function NameInput({value, className, onChange}) {

    

  return (
    <div>
      <InputField label="cardholder Name"  placeholder='e.g. Jane Appleseed' maxLength={25} value={value} className={className} onChange={onChange}/>
    </div>
  )
}

export default NameInput
