import { useState } from 'react';
import './info.css';

// parent component
function PersonalInfo() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  };

  const [input, setInput] = useState(initialValues);

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
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Personal Details</h2>
        <div className='personalInfoContainer'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={input.firstName}
            onChange={onChange}
          />
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={input.lastName}
            onChange={onChange}
          />
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' value={input.email} onChange={onChange} />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            value={input.phoneNumber}
            onChange={onChange}
          />
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            value={input.address}
            onChange={onChange}
          />
        </div>
      </form>
    </>
  );
}

export default PersonalInfo;
