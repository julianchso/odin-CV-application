import PropTypes from 'prop-types';
import './output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function OutputPersonal({ fullName, email, phone, location }) {
  return (
    <div className='personalInfoContainer'>
      <h1 className='fullName'>{fullName}</h1>
      <div className='contactInfo'>
        {email && (
          <div>
            <FontAwesomeIcon icon={faEnvelope} className='faIcon' />
            <span>{email}</span>
          </div>
        )}
        {phone && (
          <div>
            <FontAwesomeIcon icon={faPhone} className='faIcon' />
            <span>{phone}</span>
          </div>
        )}
        {location && (
          <div>
            <FontAwesomeIcon icon={faLocationDot} className='faIcon' />
            <i className='fa-solid fa-location-dot' />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  );
}

OutputPersonal.propTypes = {
  value: PropTypes.string,
  fullName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
};

export default OutputPersonal;
