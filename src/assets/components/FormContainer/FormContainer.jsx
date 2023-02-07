import React, { useState } from 'react';
import InputField from '../FormInputs/InputField';
import SubmitButton from '../FormInputs/SubmitButton';

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

  const [errorMessage, setErrorMessage] = useState('');




  const handleNameChange = (event) => {
    setName(event.target.value);
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


  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    const validations = [{ value: name, setValid: setNameValid, error: 'Cardholder name is required' },
    { value: cardNumber, setValid: setCardNumberValid, error: 'Invalid card number!', pattern: /^\d{16}$/ },
    { value: cvcNumber, setValid: setCvcNumberValid, error: 'Invalid CVC!', pattern: /^\d{3}$/ },
    { value: year, setValid: setYearValid, error: 'Invalid year', pattern: /^(2[2-9]|[3-5][0-9])$/ },
    { value: month, setValid: setMonthValid, error: 'Invalid Expiry', pattern: /^(0[1-9]|1[0-2])$/ }


    ];


    for (const { value, setValid, error, pattern = undefined } of validations) {
      if (!value || (pattern && !pattern.test(value))) {
        setValid(false);
        setErrorMessage(error);
        isValid = false;
      } else {
        setValid(true);
        setErrorMessage('');
      }
    }


    
    if (!isValid) {
      return;
    }
  };

  return (
    <form className='formContainer' onSubmit={handleSubmit}>
      <InputField label="cardholder Name" value={name} placeholder='e.g. Jane Appleseed' onChange={handleNameChange} className={nameValid ? 'valid' : 'invalid'} />
      {!nameValid && <div className="error">Please enter your name!</div>}
      <InputField label="Card Number" value={cardNumber} placeholder='e.g. 1234 5678 9123 0000' onChange={handleCardChange} className={cardNumberValid ? 'valid' : 'invalid'} />
      {!cardNumberValid && <div className="error">Invalid card number!</div>}

      <div className='rowInputContainer'>

        <div className='expContainer'>
          <InputField label='exp. date' value={month} placeholder='MM' onChange={handleMonthChange} className={monthValid ? 'valid' : 'invalid'} />
          {(!monthValid || !yearValid) && <div className='error'>Invalid Expiry</div>}

        </div>
        <div className='expContainer yearContainer'>
          <InputField label='(mm/yy)' value={year} placeholder='YY' onChange={handleYearChange} className={yearValid ? 'valid' : 'invalid'} />

        </div>
        <div className='cvcContainer'>
          <InputField label='cvc' value={cvcNumber} placeholder='e.g. 123' onChange={handleCvcChange} className={cvcNumberValid ? 'valid' : 'invalid'} />
          {!cvcNumberValid && <div className="error">Invalid CVC!</div>}

        </div>

      </div>

      

      <SubmitButton onClick={handleSubmit} />

    </form>
  );
}

export default FormContainer
