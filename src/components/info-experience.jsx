import { useState } from 'react';
import './info.css';

function ExperienceInfo() {
  const initialValues = {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  };

  const [input, setInput] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const experienceList = [];

  function experienceSubmit() {
    experienceList.push({
      school: input.school,
      degree: input.degree,
      startDate: input.startDate,
      endDate: input.endDate,
      location: input.location,
    });
    console.log(experienceList);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault}>
        <h2>Experience</h2>
        <div className='experienceContainer'>
          <label htmlFor='school'>School</label>
          <input type='text' name='school' id='school' value={input.school} onChange={onChange} />
          <label htmlFor='degree'>Degree</label>
          <input type='text' name='degree' id='degree' value={input.degree} onChange={onChange} />
          <div className='dateContainer'>
            <label htmlFor='startDate'>Start Date</label>
            <input
              type='date'
              name='startDate'
              id='startDate'
              value={input.startDate}
              onChange={onChange}
            />
            <label htmlFor='endDate'>End Date</label>
            <input
              type='date'
              name='endDate'
              id='endDate'
              value={input.endDate}
              onChange={onChange}
            />
          </div>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            name='location'
            id='location'
            value={input.location}
            onChange={onChange}
          />
        </div>
        <button className='SubmitBtn' type='button' onClick={experienceSubmit}>
          Save
        </button>
      </form>
    </>
  );
}

export default ExperienceInfo;
