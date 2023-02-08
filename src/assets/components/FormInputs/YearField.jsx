import React from 'react'

function YearField({value, className, onChange}) {

    

  return (
    <>    
    <label htmlFor='yearInput'>(mm/yy)</label>
    <input
      id='yearInput'
      type="text"
      value={value}
      placeholder='YY'
      onChange={onChange}
      className={className}
      maxLength={2}
    />
  </>
  )
}

export default YearField