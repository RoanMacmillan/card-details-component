import React from 'react'

const CardNumberField = ({value, onChange, className}) => {
  return (
    <>    
    <label htmlFor='cardNumber'>card number</label>
    <input
      id='cardNumber'
      type="text"
      value={value}
      placeholder='e.g. 1234 5678 9123 0000'
      onChange={onChange}
      className={className}
      maxLength={16}
    />
  </>
  )
}

export default CardNumberField
