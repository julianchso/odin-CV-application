import { useState } from 'react';
import './info.css';

function ExperienceInfo() {
  const [experience, setExperience] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
  };

  const addExperience = (e) => {
    const experienceNew = {
      position: e.position.value,
      company: e.company.value,
      startDate: e.startDate.value,
      endDate: e.endDate.value,
      location: e.location.value,
    };

    setExperience([...experience, experienceNew]);
  };
  console.log(experience);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault}>
        <h2>Experience</h2>
        <div className='experienceContainer'>
          <label htmlFor='position'>Position</label>
          <input type='text' name='position' id='position' onChange={onChange} />
          <label htmlFor='company'>Company</label>
          <input type='text' name='company' id='company' onChange={onChange} />
          <div className='dateContainer'>
            <label htmlFor='startDate'>Start Date</label>
            <input type='date' name='startDate' id='startDate' onChange={onChange} />
            <label htmlFor='endDate'>End Date</label>
            <input type='date' name='endDate' id='endDate' onChange={onChange} />
          </div>
          <label htmlFor='location'>Location</label>
          <input type='text' name='location' id='location' onChange={onChange} />
        </div>
        <button
          className='SubmitBtn'
          type='button'
          onClick={addExperience}
          onSubmit={(e) => e.preventDefault}
        >
          Save
        </button>
      </form>
    </>
  );
}

export default ExperienceInfo;
