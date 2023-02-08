import React from 'react'

function YearField({value, className, onChange}) {

    

  return (
    <>    
    <label htmlFor='year Input'>(mm/yy)</label>
    <input
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