import './output.css';

function OutputExperience({ data }) {
  const arrData =
    data &&
    data.map((info) => (
      <div key={info.id}>
        <div className='outputCard'>
          <div className='outputCard__main'>
            <div className='outputCard__title'>
              <p className='outputCard__position outputCard--padding'>{info.position}</p>
              <p className='outputCard__company outputCard--padding'>{info.company}</p>
              <p className='outputCard__location outputCard--padding'>{info.location}</p>
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
