import { useState } from 'react';
import './App.css';
import InputPersonal from './components/InputPersonal';
import InputExperience from './components/InputExperience';
import InputEducation from './components/InputEducation';
import OutputPersonal from './components/OutputPersonal';
import OutputExperience from './components/OutputExperience';
import OutputEducation from './components/outputEducation';
import exampleData from './exampleData';

function App() {
  const [input, setInput] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <div className='app'>
        <div className='inputWrapper'>
          <div className='inputSection'>
            <InputPersonal onChange={onChange}></InputPersonal>
            <InputExperience></InputExperience>
            <InputEducation></InputEducation>
          </div>
        </div>
        <div className='outputWrapper'>
          <div className='outputSection'>
            <OutputPersonal
              className='contactInfo'
              fullName={input.fullName}
              email={input.email}
              phone={input.phone}
              location={input.location}
            ></OutputPersonal>
            <OutputExperience data={exampleData.experience}></OutputExperience>
            <OutputEducation data={exampleData.education}></OutputEducation>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
