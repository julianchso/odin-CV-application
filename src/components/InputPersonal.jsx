import './input.css';
import PropTypes from 'prop-types';

function InputPersonal({ onChange }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='formContainer'>
        <h2>Personal Details</h2>
        <div className='inputContainer alignLeft'>
          <div className='inputGroup'>
            <label htmlFor='fullName'>Full Name</label>
            <input type='text' name='fullName' id='fullName' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='phone'>Phone Number</label>
            <input type='text' name='phone' id='phone' onChange={onChange} />
          </div>
          <div className='inputGroup'>
            <label htmlFor='location'>Location</label>
            <input type='text' name='location' id='location' onChange={onChange} />
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
