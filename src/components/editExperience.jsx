import { useState } from 'react';

const editForm = ({ value }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  function turnOnEditMode() {
    setIsEditMode(true);
  }

  return (
    <div>
      <span>
        <input type='text' value={value} readOnly={!isEditMode} onClick={turnOnEditMode} />
      </span>
    </div>
  );
};

export default editForm;
