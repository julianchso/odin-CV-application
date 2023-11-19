import { useState } from 'react';
import './info.css';
import { v4 as uuidv4 } from 'uuid';

function EducationInfo() {
  const [education, setEducation] = useState([]);
  const [educationList, setEducationList] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
    // console.log(`${name}: ${value}`);
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
      <form onSubmit={(e) => e.preventDefault}>
        <h2>Education</h2>
        <div className='InfoContainer'>
          <label htmlFor='school'>School</label>
          <input type='text' name='school' id='school' onChange={onChange} />
          <label htmlFor='degree'>Degree</label>
          <input type='text' name='degree' id='degree' onChange={onChange} />
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
          onClick={addEducation}
          onSubmit={(e) => e.preventDefault}
        >
          Save
        </button>
      </form>
    </>
  );
}

export default EducationInfo;
