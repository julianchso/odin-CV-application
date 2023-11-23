import InputPersonal from './InputPersonal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import App from '../App';

function OutputPersonal({ firstName, lastName, email, phoneNumber, address }) {
  // console.log(value);

  return (
    <div className='personalInfo'>
      <h1>
        {firstName} {lastName}
      </h1>
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
