import InputPersonal from './InputPersonal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import App from '../App';
import './output.css';

// function OutputPersonal({ firstName, lastName, email, phoneNumber, address }) {
function OutputPersonal({ firstName, lastName, email, phoneNumber, address }) {
  // console.log(value);
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className='personalInfo'>
      <div className='fullName'>
        {<h1 className='personalInfo__name'>{firstName}</h1>}
        {/* TODO: fix spacing size */}
        <span>&nbsp;</span>
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
