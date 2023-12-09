import { useState } from 'react';
import InputPersonal from './components/InputPersonal';
import InputExperience from './components/InputExperience';
import InputEducation from './components/InputEducation';
import OutputPersonal from './components/OutputPersonal';
import OutputExperience from './components/OutputExperience';
import OutputEducation from './components/outputEducation';
import exampleData from './exampleData';
import formData from './formData';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [personal, setPersonal] = useState([]);

  const [experience, setExperience] = useState(formData.experience);
  const [experienceList, setExperienceList] = useState(exampleData.experience);

  const onChangePersonal = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const onChangeExperience = (e) => {
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
    // clearFields();
  };
  // console.log(experienceList);

  const clearFields = () => {
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
      <div className='app'>
        <div className='inputSection'>
          <div className='inputWrapper'>
            <InputPersonal Experience={onChangePersonal}></InputPersonal>
            <InputExperience
              fieldValue={experience}
              experienceList={experienceList}
              onChange={onChangeExperience}
              clearFields={clearFields}
              addExperience={addExperience}
            ></InputExperience>
            <InputEducation></InputEducation>
          </div>
        </div>
        <div className='outputSection'>
          <div className='outputWrapper'>
            <OutputPersonal
              className='contactInfo'
              fullName={personal.fullName}
              email={personal.email}
              phone={personal.phone}
              location={personal.location}
            ></OutputPersonal>
            <div className='resumeSection'>
              <OutputExperience data={experienceList}></OutputExperience>
              {/* <OutputEducation data={educationList.education}></OutputEducation> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
