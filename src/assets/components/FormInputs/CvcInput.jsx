import React from 'react'
import InputField from './InputField'
import './InputField.css';

function CvcInput({value, className, onChange}) {

    

  return (
    <div>
      <InputField label='cvc' placeholder='e.g. 123' maxLength={3} value={value} className={className} onChange={onChange}/>
    </div>
  )
}

export default CvcInput