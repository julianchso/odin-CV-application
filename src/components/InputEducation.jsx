import { useState } from 'react';
import './input.css';
import { v4 as uuidv4 } from 'uuid';
import exampleData from '../exampleData';
import formData from '../formData';
import PropTypes from 'prop-types';

function InputEducation({ fieldValue, educationList, onChange, clearFields, addEducation }) {
  // console.log(educationList);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault} className='formContainer'>
        <h2>Education</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='school'>School</label>
            <input
              type='text'
              name='school'
              id='school'
              value={fieldValue.school}
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='degree'>Degree</label>
            <input
              type='text'
              name='degree'
              id='degree'
              value={fieldValue.degree}
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <div className='dateContainer'>
              <div className='dateContainer__input'>
                <label htmlFor='startDate'>Start Date</label>
                <input
                  type='month'
                  name='startDate'
                  id='startDate'
                  value={fieldValue.startDate}
                  onChange={onChange}
                />
              </div>
              <div className='dateContainer__input'>
                <label htmlFor='endDate'>End Date</label>
                <input
                  type='month'
                  name='endDate'
                  id='endDate'
                  value={fieldValue.endDate}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className='inputGroup'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              id='location'
              value={fieldValue.location}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='formBtnContainer'>
          <button
            type='button'
            className='clearFieldsBtn'
            onClick={clearFields}
            onSubmit={(e) => e.preventDefault}
          >
            Clear
          </button>
          <button
            type='button'
            className='submitBtn'
            onClick={addEducation}
            onSubmit={(e) => e.preventDefault}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

InputEducation.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default InputEducation;
