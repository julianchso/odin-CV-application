import './output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function OutputEducation({ data, deleteEducation }) {
  const arrData =
    data &&
    data.map((education) => (
      <div key={education.id}>
        <div className='outputCard'>
          <div className='outputCard__main'>
            <div className='outputCard__wrapper'>
              <button
                onClick={() => {
                  deleteEducation(education.id);
                }}
                className='faIconBtn'
              >
                <FontAwesomeIcon icon={faTrashCan} className='faIcon__trashCan' />
              </button>
              <div className='outputCard__title'>
                <p className='outputCard__school'>{education.school}</p>
                <p className='outputCard__degree'>{education.degree}</p>
                <p className='outputCard__location'>{education.location}</p>
              </div>
            </div>
            <div className='outputCard__dates'>
              <p>
                {education.startDate} – {education.endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      {arrData && <h3 className='sectionTitle'>Education</h3>}
      {arrData}
    </>
  );
}

OutputEducation.propTypes = {
  data: PropTypes.array,
  deleteEducation: PropTypes.func,
};

export default OutputEducation;
