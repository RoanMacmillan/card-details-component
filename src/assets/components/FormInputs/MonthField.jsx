import React from 'react'
function MonthField({value, className, onChange}) {

    

  return (


    <>    

    <label htmlFor='month Input'>EXP. DATE</label>
    <input
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
