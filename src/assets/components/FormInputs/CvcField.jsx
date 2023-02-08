import React from 'react'

function CvcField({value, className, onChange}) {

    

  return (
    <>    
    <label htmlFor='cvc'>cvc</label>
    <input
      id='cvc'
      type="text"
      value={value}
      placeholder='e.g. 123'
      onChange={onChange}
      className={className}
      maxLength={3}
    />
  </>
  )
}

export default CvcField