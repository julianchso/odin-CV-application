import './output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function OutputEducation({ data }) {
  const arrData =
    data &&
    data.map((school) => (
      <div key={school.id}>
        <div className='outputCard'>
          <div className='outputCard__main'>
            <div className='outputCard__wrapper'>
              <button className='faIconBtn'>
                <FontAwesomeIcon icon={faTrashCan} className='faIcon__trashCan' />
              </button>
              <div className='outputCard__title'>
                <p className='outputCard__school'>{school.school}</p>
                <p className='outputCard__degree'>{school.degree}</p>
                <p className='outputCard__location'>{school.location}</p>
              </div>
            </div>
            <div className='outputCard__dates'>
              <p>
                {school.startDate} – {school.endDate}
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

export default OutputEducation;
