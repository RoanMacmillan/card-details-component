import React from 'react'

function NameField({value, className, onChange}) {

    

  return (
    <>    
    <label htmlFor='name Input'>cardholder name</label>
    <input
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
