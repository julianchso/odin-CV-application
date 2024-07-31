import './input.css';
import PropTypes from 'prop-types';
import exampleData from '../exampleData';

function InputPersonal({ onChange }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='formContainer'>
        <h2>Personal Details</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              defaultValue={exampleData.personalInfo.fullName}
              name='fullName'
              id='fullName'
              onChange={onChange}
              // onChange={(e) => onChange(e.target.value)}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              defaultValue={exampleData.personalInfo.email}
              name='email'
              id='email'
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              defaultValue={exampleData.personalInfo.phone}
              name='phone'
              id='phone'
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              defaultValue={exampleData.personalInfo.location}
              name='location'
              id='location'
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

InputPersonal.propTypes = {
  onChange: PropTypes.func,
};

export default InputPersonal;
