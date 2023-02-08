import React from 'react'
import InputField from './InputField'
import './InputField.css';

function YearInput({value, className, onChange}) {

    

  return (
    <div>
      <InputField label='(mm/yy)' placeholder='YY' maxLength={2} value={value} className={className} onChange={onChange}/>
    </div>
  )
}

export default YearInput