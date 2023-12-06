import './output.css';

function OutputExperience({ data }) {
  const arrData =
    data &&
    data.map((role) => (
      <div key={role.id}>
        <div className='outputCard'>
          <div className='outputCard__main'>
            <div className='outputCard__title'>
              <p className='outputCard__position outputCard--padding'>{role.position}</p>
              <p className='outputCard__company outputCard--padding'>{role.company}</p>
              <p className='outputCard__location outputCard--padding'>{role.location}</p>
            </div>
            <div className='outputCard__dates'>
              <p>
                {role.startDate} – {role.endDate}
              </p>
            </div>
          </div>
          <p className='outputCard__description'>{role.description}</p>
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
