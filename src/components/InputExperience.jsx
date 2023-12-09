import { useState } from 'react';
import exampleData from '../exampleData';
import formData from '../formData';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './input.css';

function InputExperience({ fieldValue, experienceList, onChange, clearFields, addExperience }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault} className='formContainer'>
        <h2 className='sectionHeading'>Experience</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='position'>Position</label>
            <input
              required
              type='text'
              name='position'
              id='position'
              value={fieldValue.position}
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              id='company'
              value={fieldValue.company}
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
          <div className='inputGroup'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              value={fieldValue.description}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='formBtnContainer'>
          <button type='button' className='clearFieldsBtn' onClick={clearFields}>
            Clear
          </button>
          <button
            type='button'
            className='submitBtn'
            onClick={() => {
              addExperience();
              clearFields();
            }}
            onSubmit={(e) => e.preventDefault}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

// InputExperience.propTypes = {
//   position: PropTypes.string,
//   company: PropTypes.string,
//   startDate: PropTypes.string,
//   endDate: PropTypes.string,
// };

export default InputExperience;
