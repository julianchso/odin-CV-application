// import { useState } from 'react';
import './input.css';
import PropTypes from 'prop-types';

function InputPersonal({ onChange }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Personal Details</h2>
        <div className='InputPersonalContainer'>
          <div className='input-group'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' id='firstName' onChange={onChange} />
          </div>
          <div className='input-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' id='lastName' onChange={onChange} />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' onChange={onChange} />
          </div>
          <div className='input-group'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='text' name='phoneNumber' id='phoneNumber' onChange={onChange} />
          </div>
          <div className='input-group'>
            <label htmlFor='address'>Address</label>
            <input type='text' name='address' id='address' onChange={onChange} />
          </div>
        </div>
      </form>
    </>
  );
}

InputPersonal.propTypes = {
  onChange: PropTypes.func,
};

export default InputPersonal;
