// import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/Info-personal';
import ExperienceInfo from './components/info-experience';

function App() {
  return (
    <>
      <h1 className='title'>CV Application</h1>
      <div>
        <PersonalInfo></PersonalInfo>
        <ExperienceInfo></ExperienceInfo>
      </div>
    </>
  );
}

export default App;
