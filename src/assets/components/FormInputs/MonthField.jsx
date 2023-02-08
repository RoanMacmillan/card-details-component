import React from 'react'
function MonthField({value, className, onChange}) {

    

  return (


    <>    

    <label htmlFor='monthInput'>EXP. DATE</label>
    <input
      id='monthInput'
      type="text"
      value={value}
      placeholder='MM'
      onChange={onChange}
      className={className}
      maxLength={2}
    />

  </>


  )
}

export default MonthField
