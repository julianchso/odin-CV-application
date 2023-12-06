import { useState } from 'react';
import './input.css';
import { v4 as uuidv4 } from 'uuid';
import exampleData from '../exampleData';
import emptyData from '../emptyData';

// const emptyData = {
//   experience: {
//     position: '',
//     company: '',
//     startDate: '',
//     endDate: '',
//     location: '',
//     description: '',
//   },
// };

function InputExperience() {
  const [experience, setExperience] = useState(emptyData.experience);
  const [experienceList, setExperienceList] = useState(exampleData.experience);

  const onChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setExperience({ ...experience, [name]: value });
  };

  const addExperience = () => {
    const experienceNew = {
      position: experience.position,
      company: experience.company,
      startDate: experience.startDate,
      endDate: experience.endDate,
      location: experience.location,
      description: experience.description,
      id: uuidv4(),
    };
    setExperienceList([...experienceList, experienceNew]);
    clearFields();
  };
  console.log(experienceList);

  const clearFields = () => {
    console.log(experience);
    setExperience({
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault} className='formContainer'>
        <h2>Experience</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='position'>Position</label>
            <input
              required
              type='text'
              name='position'
              id='position'
              value={experience.position}
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              id='company'
              value={experience.company}
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
                  value={experience.startDate}
                  onChange={onChange}
                />
              </div>
              <div className='dateContainer__input'>
                <label htmlFor='endDate'>End Date</label>
                <input
                  type='month'
                  name='endDate'
                  id='endDate'
                  value={experience.endDate}
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
              value={experience.location}
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              value={experience.description}
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
            onClick={addExperience}
            onSubmit={(e) => e.preventDefault}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default InputExperience;
