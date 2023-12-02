import PropTypes from 'prop-types';
import './output.css';
import InputExperience from './InputEducation';
import exampleData from '../exampleData';

function OutputExperience({ data }) {
  console.log(data);
  console.log(typeof data);

  const arrData = data.map((role) => (
    <div key={role.id}>
      <div className='title'>
        <p>{role.position}</p>
        <p>{role.company}</p>
      </div>
      <div className='dates'>
        <p>
          {role.startDate} - {role.endDate}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      {arrData && <h1>Experience</h1>}
      {arrData}
    </>
  );
}

export default OutputExperience;
