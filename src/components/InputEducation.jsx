import { useState } from 'react';
import './input.css';
import { v4 as uuidv4 } from 'uuid';

function InputEducation() {
  const [education, setEducation] = useState([]);
  const [educationList, setEducationList] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
    console.log(`${name}: ${value}`);
  };

  const addEducation = () => {
    const educationNew = {
      school: education.school,
      degree: education.degree,
      startDate: education.startDate,
      endDate: education.endDate,
      location: education.location,
      id: uuidv4(),
    };
    setEducationList([...educationList, educationNew]);
  };
  console.log(educationList);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault} className='formContainer'>
        <h2>Education</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='school'>School</label>
            <input type='text' name='school' id='school' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='degree'>Degree</label>
            <input type='text' name='degree' id='degree' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <div className='dateContainer'>
              <label htmlFor='startDate'>Start Date</label>
              <input type='date' name='startDate' id='startDate' onChange={onChange} />
              <label htmlFor='endDate'>End Date</label>
              <input type='date' name='endDate' id='endDate' onChange={onChange} />
            </div>
          </div>
          <div className='inputGroup'>
            <label htmlFor='location'>Location</label>
            <input type='text' name='location' id='location' onChange={onChange} />
          </div>
        </div>
        <div className='formBtnContainer'>
          <button
            type='button'
            className='cancelBtn'
            onClick={addEducation}
            onSubmit={(e) => e.preventDefault}
          >
            Cancel
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

export default InputEducation;
