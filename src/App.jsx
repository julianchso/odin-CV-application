// import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/InfoPersonal';
import EducationInfo from './components/InfoEducation';
import ExperienceInfo from './components/InfoExperience';

function App() {
  return (
    <>
      <h1 className='title'>CV Application</h1>
      <div>
        <PersonalInfo></PersonalInfo>
        <EducationInfo></EducationInfo>
        <ExperienceInfo></ExperienceInfo>
      </div>
    </>
  );
}

export default App;
