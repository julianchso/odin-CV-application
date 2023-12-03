import PropTypes from 'prop-types';
import './output.css';

function OutputEducation({ data }) {
  const arrData =
    data &&
    data.map((school) => (
      <div key={school.id}>
        <div className='outputCard'>
          <div className='outputCard__title'>
            <p className='outputCard__school'>{school.school}</p>
            <p className='outputCard__degree'>{school.degree}</p>
            <p className='outputCard__location'>{school.location}</p>
          </div>
          <div className='outputCard__dates'>
            <p>
              {school.startDate} – {school.endDate}
            </p>
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
