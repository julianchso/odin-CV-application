import { useState } from 'react';
import './input.css';
import { v4 as uuidv4 } from 'uuid';

function InputExperience() {
  const [experience, setExperience] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

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
      description: experience.description,
      id: uuidv4(),
    };
    setExperienceList([...experienceList, experienceNew]);
  };
  console.log(experienceList);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault} className='formContainer'>
        <h2>Experience</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='position'>Position</label>
            <input type='text' name='position' id='position' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='company'>Company</label>
            <input type='text' name='company' id='company' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <div className='dateContainer'>
              <div className='dateContainer__input'>
                <label htmlFor='startDate'>Start Date</label>
                <input type='date' name='startDate' id='startDate' onChange={onChange} />
              </div>
              <div className='dateContainer__input'>
                <label htmlFor='endDate'>End Date</label>
                <input type='date' name='endDate' id='endDate' onChange={onChange} />
              </div>
            </div>
          </div>
          <div className='inputGroup'>
            <label htmlFor='location'>Location</label>
            <input type='text' name='location' id='location' onChange={onChange} />
          </div>
        </div>
        <div className='formBtnContainer'>
          <button type='button' className='cancelBtn'>
            Cancel
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
