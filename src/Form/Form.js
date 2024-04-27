import React, { useState } from 'react';

export function FormExample() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    acceptTerms: false
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(name, value, checked, type);
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Use this data for further processing
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      acceptTerms: false
    });
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            /> Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
            /> Female
          </label>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
          /> Accept Terms and Conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// export default FormExample;  
