import React, { useState } from 'react';
import SubmitButton from '../FormInputs/SubmitButton';
import ThankYouMessage from './ThankYouMessage';
import Logo from '../../images/card-logo.svg';
import NameField from '../FormInputs/NameField';
import CardNumberField from '../FormInputs/CardNumberField';
import YearField from '../FormInputs/YearField';
import MonthField from '../FormInputs/MonthField';
import CvcField from '../FormInputs/CvcField';

function FormContainer() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('')
  const [cvcNumber, setCvcNumber] = useState('')
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [cardNumberValid, setCardNumberValid] = useState(true);
  const [monthValid, setMonthValid] = useState(true);
  const [yearValid, setYearValid] = useState(true);
  const [cvcNumberValid, setCvcNumberValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Functions to update the state variables with the values of each input field

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleCardChange = (event) => {
    setCardNumber(event.target.value);
  }

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const handleCvcChange = (event) => {
    setCvcNumber(event.target.value);
  }


  // Checks if each input has been entered correctly by user after clicking submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    

    // Array that holds objects of each input, regex checks for valid card number input
    const validations = [{ value: name, setValid: setNameValid },
    { value: cardNumber, setValid: setCardNumberValid, pattern: /^\d{16}$/ },
    { value: cvcNumber, setValid: setCvcNumberValid, pattern: /^\d{3}$/ },
    { value: year, setValid: setYearValid, pattern: /^(2[2-9]|[3-5][0-9])$/ },
    { value: month, setValid: setMonthValid, pattern: /^(0[1-9]|1[0-2])$/ }

    ];

    for (const { value, setValid, pattern = undefined } of validations) {
      if (!value || (pattern && !pattern.test(value))) {
        setValid(false);
        isValid = false;
      } else {
        setValid(true);
      }
    }

    if (!isValid) {
      return;
    }
    setSubmitted(true);
  };

  return ( 
    // Contains the card images, and updates there values as the user types into the relative input fields
    <>
      <div className='topContainer'>
        <div className='cardBack'><span className='cardBackNumber'>{cvcNumber || '000'}</span></div>
        <div className='cardFront'>
          <div className='circleContainer'>
            <img src={Logo}></img>
          </div>
          <div className='cardNumberContainer'>
            {cardNumber || '0000 0000 0000 0000'}
          </div>
          <div className='cardDetailsContainer'>
            <span className='frontCardName'>{name || 'jane appleseed'}</span>
            <span className='frontExpiry'>{month || '00'}/{year || '00'}</span>
          </div>
        </div>
      </div>

      {/* If form is incorectly submitted, displays error classes and message, e.g Invalid card number! */}
      {!submitted ? (

        <form className='formContainer' onSubmit={handleSubmit}>
          {/* if input is invalid applies the invalid class (red border) */}
          <NameField className={nameValid ? 'valid' : 'invalid'} value={name} onChange={handleNameChange} />
          {/* if input is invalid applies an error message */}
          {!nameValid && <div className="error">Please enter your name!</div>}
          <CardNumberField className={cardNumberValid ? 'valid' : 'invalid'} value={cardNumber} onChange={handleCardChange} />
          {!cardNumberValid && <div className="error">Invalid card number!</div>}

          <div className='rowInputContainer'>
            <div className='expContainer'>
              <MonthField className={monthValid ? 'valid' : 'invalid'} value={month} onChange={handleMonthChange} />
              {(!monthValid || !yearValid) && <div className='error'>Invalid Expiry</div>}
            </div>

            <div className='expContainer'>
              <YearField className={yearValid ? 'valid' : 'invalid'} value={year} onChange={handleYearChange} />
            </div>

            <div className='cvcContainer'>
              <CvcField className={cvcNumberValid ? 'valid' : 'invalid'} value={cvcNumber} onChange={handleCvcChange} />
              {!cvcNumberValid && <div className="error">Invalid CVC!</div>}
            </div>
          </div>

          <SubmitButton onClick={handleSubmit} />

        </form>
      ) : (

        // if form is correctly submitted, advances to the thank you message

        <ThankYouMessage />
      )}
    </>
  );
}

export default FormContainer
