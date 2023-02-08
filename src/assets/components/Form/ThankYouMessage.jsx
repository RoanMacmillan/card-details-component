import React from 'react'
import Tick from '../../images/icon-complete.svg'

const ThankYouMessage = () => {

    const handleClick = () => {
        window.location.reload();
      };


    return (
        <div className='thankYouMessage'>
            <img className='complete' src={Tick} alt='Tick'/>
            <span>thank you!</span>
            <p>We've added your card details!</p>
            <button onClick={handleClick} className='submitBtn'>Continue</button>
        </div>
    )
}

export default ThankYouMessage
