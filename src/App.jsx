import { useState } from 'react';
import './App.css';
import InputPersonal from './components/InputPersonal';
import InputEducation from './components/InputEducation';
import InputExperience from './components/InputExperience';
import OutputPersonal from './components/OutputPersonal';

function App() {
  const [input, setInput] = useState([]);
  const fullName = `${input.firstName} ${input.lastName}`;

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
      </div>
      <div className='outputWrapper'>
        <div className='outputSection'>
          <OutputPersonal
            firstName={input.firstName}
            lastName={input.lastName}
            email={input.email}
            phoneNumber={input.phoneNumber}
            address={input.address}
          ></OutputPersonal>
        </div>
      </div>
    </>
  );
}

export default App;
