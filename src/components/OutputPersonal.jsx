import InputPersonal from './InputPersonal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './output.css';

// function OutputPersonal({ firstName, lastName, email, phoneNumber, address }) {
function OutputPersonal({ firstName, lastName, email, phoneNumber, address }) {
  // console.log(value);
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className='personalInfoContainer'>
      <div className='fullName'>
        {<h1 className='personalInfo__name'>{firstName}</h1>}
        {<h1 className='personalInfo__name'>{lastName}</h1>}
      </div>
      <div className='contactInfo'>
        <div>
          <span>{email}</span>
        </div>
        <div>
          <span>{phoneNumber}</span>
        </div>
        <div>
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
}

OutputPersonal.propTypes = {
  value: PropTypes.string,
};

export default OutputPersonal;
