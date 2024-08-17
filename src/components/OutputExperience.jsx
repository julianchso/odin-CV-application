import './output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function OutputExperience({ data, deleteExperience, editExperience }) {
  const arrData =
    data &&
    data.map((experience) => (
      <div key={experience.id}>
        <div className='outputCard'>
          <div className='outputCard__main'>
            <div className='outputCard__wrapper'>
              <button
                onClick={() => {
                  editExperience(experience.id);
                }}
                className='faIconBtn'
              >
                <FontAwesomeIcon icon={faPencil} className='faIcon__trashCan' />
              </button>
              <button
                onClick={() => {
                  deleteExperience(experience.id);
                }}
                className='faIconBtn'
              >
                <FontAwesomeIcon icon={faTrashCan} className='faIcon__trashCan' />
              </button>
              <div className='outputCard__title'>
                <p className='outputCard__position outputCard--padding'>{experience.position}</p>
                <p className='outputCard__company outputCard--padding'>{experience.company}</p>
                <p className='outputCard__location outputCard--padding'>{experience.location}</p>
              </div>
            </div>
            <div className='outputCard__dates'>
              <p>
                {experience.startDate} – {experience.endDate}
              </p>
            </div>
          </div>
          <p className='outputCard__description'>{experience.description}</p>
        </div>
      </div>
    ));

  return (
    <>
      {arrData && <h3 className='sectionTitle'>Experience</h3>}
      {arrData}
    </>
  );
}

OutputExperience.propTypes = {
  data: PropTypes.array,
  editExperience: PropTypes.func,
  deleteExperience: PropTypes.func,
};

export default OutputExperience;
