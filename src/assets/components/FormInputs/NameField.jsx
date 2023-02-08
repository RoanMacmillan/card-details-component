import React from 'react'

function NameField({value, className, onChange}) {

    

  return (
    <>    
    <label htmlFor='nameInput'>cardholder name</label>
    <input
      id='nameInput'
      type="text"
      value={value}
      placeholder='e.g. Jane Appleseed'
      onChange={onChange}
      className={className}
      maxLength={20}
    />
  </>
  )
}

export default NameField
