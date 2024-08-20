import { useState } from 'react';
import PropTypes from 'prop-types';

const EditForm = ({ value, ...props }) => {
  const [isEditMode, setIsEditMode] = useState(true);

  function turnOnEditMode() {
    setIsEditMode(true);
  }

  return (
    <div>
      <span>
        <input
          type='text'
          value={value}
          readOnly={!isEditMode}
          onClick={turnOnEditMode}
          onBlur={() => setIsEditMode(false)}
        />
      </span>
    </div>
  );
};

EditForm.propTypes = {
  value: PropTypes.string,
};

export default EditForm;
