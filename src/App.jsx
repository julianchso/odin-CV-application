import { useState } from 'react';
import InputPersonal from './components/InputPersonal';
import InputExperience from './components/InputExperience';
import InputEducation from './components/InputEducation';
import OutputPersonal from './components/OutputPersonal';
import OutputExperience from './components/OutputExperience';
import OutputEducation from './components/outputEducation';
import exampleData from './exampleData';
import formData from './formData';
import './App.css';

function App() {
  const [personal, setPersonal] = useState([]);
  // const [experience, setExperience] = useState(formData.experience);
  // const [experienceList, setExperienceList] = useState(exampleData.experience);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  return (
    <>
      <div className='app'>
        <div className='inputSection'>
          <div className='inputWrapper'>
            <InputPersonal onChange={onChange}></InputPersonal>
            <InputExperience></InputExperience>
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
              <OutputExperience data={exampleData.experience}></OutputExperience>
              <OutputEducation data={exampleData.education}></OutputEducation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
