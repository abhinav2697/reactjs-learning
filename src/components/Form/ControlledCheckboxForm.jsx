import React, { useState } from 'react';
const ControlledCheckboxForm = () => {
  const [formData, setFormData] = useState({ isAgreed: false });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Agree to Terms:
          <input
            type="checkbox"
            name="isAgreed"
            checked={formData.isAgreed}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledCheckboxForm;
