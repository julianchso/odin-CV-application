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

  const [education, setEducation] = useState(formData.education);
  const [educationList, setEducationList] = useState(exampleData.education);

  const onChangePersonal = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  // Experience Section
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
    setExperienceList([experienceNew, ...experienceList]);
    // clearFieldsExperience();
  };
  // console.log(experienceList);

  const clearFieldsExperience = () => {
    setExperience({
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  };

  // Education Section
  const onChangeEducation = (e) => {
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
    setEducationList([educationNew, ...educationList]);
    clearFieldsEducation();
  };

  const clearFieldsEducation = () => {
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  };

  const deleteOutput = () => {
    // TODO
    setExperience(experienceList.filter((a) => a.id !== experience.id));
    console.log('delete');
  };

  return (
    <>
      <div className='app'>
        <div className='inputSection'>
          <div className='inputWrapper'>
            <InputPersonal onChange={onChangePersonal}></InputPersonal>
            <InputExperience
              fieldValue={experience}
              experienceList={experienceList}
              onChange={onChangeExperience}
              clearFields={clearFieldsExperience}
              addExperience={addExperience}
            ></InputExperience>
            <InputEducation
              fieldValue={education}
              educationList={educationList}
              onChange={onChangeEducation}
              clearFields={clearFieldsEducation}
              addEducation={addEducation}
            ></InputEducation>
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
              <OutputExperience
                data={experienceList}
                deleteOutput={deleteOutput}
              ></OutputExperience>
              <OutputEducation data={educationList}></OutputEducation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
