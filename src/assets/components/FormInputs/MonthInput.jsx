import React from 'react'
import InputField from './InputField'
import './InputField.css';

function MonthInput({value, className, onChange}) {

    

  return (
    <div>
      <InputField label='exp. date' placeholder='MM' maxLength={2} value={value} className={className} onChange={onChange}/>
    </div>
  )
}

export default MonthInput
