import './output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function OutputExperience({ data, deleteOutput }) {
  // console.log(data);
  const arrData =
    data &&
    data.map((info) => (
      <div key={info.id}>
        <div className='outputCard'>
          <div className='outputCard__main'>
            <div className='outputCard__wrapper'>
              <button onClick={deleteOutput} className='faIconBtn'>
                <FontAwesomeIcon icon={faTrashCan} className='faIcon__trashCan' />
              </button>

              <div className='outputCard__title'>
                <p className='outputCard__position outputCard--padding'>{info.position}</p>
                <p className='outputCard__company outputCard--padding'>{info.company}</p>
                <p className='outputCard__location outputCard--padding'>{info.location}</p>
              </div>
            </div>
            <div className='outputCard__dates'>
              <p>
                {info.startDate} – {info.endDate}
              </p>
            </div>
          </div>
          <p className='outputCard__description'>{info.description}</p>
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

export default OutputExperience;
