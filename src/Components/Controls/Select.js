import React from 'react';

const Select = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div>
      <select className='form-control' value={value} onChange={handleChange}>
        <option value='html'>Yes</option>
        <option value='text'>No</option>
      </select>
    </div>
  );
};

export default Select;
