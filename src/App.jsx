import { useState } from 'react';
import './App.css';
import InputPersonal from './components/InputPersonal';
import InputEducation from './components/InputEducation';
import InputExperience from './components/InputExperience';
import OutputPersonal from './components/OutputPersonal';

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
      <h1 className='title'>CV Application</h1>
      <div className='inputWrapper'>
        <div className='inputSection'>
          <InputPersonal onChange={onChange}></InputPersonal>
          {/* <InputEducation></InputEducation> */}
          {/* <InputExperience></InputExperience> */}
        </div>
        <div className='outputSection'>
          <OutputPersonal firstName={input.firstName}></OutputPersonal>
          <OutputPersonal lastName={input.lastName}></OutputPersonal>
          <OutputPersonal email={input.email}></OutputPersonal>
          <OutputPersonal phoneNumber={input.phoneNumber}></OutputPersonal>
          <OutputPersonal address={input.address}></OutputPersonal>
        </div>
      </div>
    </>
  );
}

export default App;
