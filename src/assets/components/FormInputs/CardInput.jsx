import React from 'react'
import InputField from './InputField'
import './InputField.css';

const CardInput = ({value, className, onChange}) => {
  return (
    <div>
      <InputField label="Card Number" placeholder='e.g. 1234 5678 9123 0000' maxLength={16} value={value} className={className} onChange={onChange}/>
    </div>
  )
}

export default CardInput
