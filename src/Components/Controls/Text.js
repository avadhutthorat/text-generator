import React from 'react';

const Text = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(Number(e.target.value));
  };

  return (
    <div>
      <input
        type='number'
        className='form-control'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Text;
