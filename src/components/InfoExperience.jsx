import { useState } from 'react';
import './info.css';
import { v4 as uuidv4 } from 'uuid';

function ExperienceInfo() {
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
      <form onSubmit={(e) => e.preventDefault}>
        <h2>Experience</h2>
        <div className='InfoContainer'>
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
          type='button'
          className='SubmitBtn'
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
