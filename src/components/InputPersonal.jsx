import './input.css';
import PropTypes from 'prop-types';

function InputPersonal({ onChange, personalInfo }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='formContainer'>
        <h2>Personal Details</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              value={personalInfo.fullName}
              name='fullName'
              id='fullName'
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              value={personalInfo.email}
              name='email'
              id='email'
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='text'
              value={personalInfo.phone}
              name='phone'
              id='phone'
              onChange={onChange}
            />
          </div>
          <div className='inputGroup'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              value={personalInfo.location}
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
  personalInfo: PropTypes.object,
};

export default InputPersonal;
