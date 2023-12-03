import PropTypes from 'prop-types';
import './output.css';

function OutputExperience({ data }) {
  const arrData =
    data &&
    data.map((role) => (
      <div key={role.id}>
        <div className='outputCard'>
          <div className='outputCard__title'>
            <p className='outputCard__position'>{role.position}</p>
            <p className='outputCard__company'>{role.company}</p>
            <p className='outputCard__location'>{role.location}</p>
          </div>
          <div className='outputCard__dates'>
            <p>
              {role.startDate} – {role.endDate}
            </p>
          </div>
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
