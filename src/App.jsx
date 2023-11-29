import { useState } from 'react';
import './App.css';
import InputPersonal from './components/InputPersonal';
import InputEducation from './components/InputEducation';
import InputExperience from './components/InputExperience';
import OutputPersonal from './components/OutputPersonal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

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
            <InputEducation></InputEducation>
            <InputExperience></InputExperience>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
