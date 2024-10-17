import React, { useState } from 'react';
import axios from 'axios';

const AuthorizationForm = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    treatment: '',
    doctorsNotes: ''
  });

  const [errorMessages, setErrorMessages] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages(null); 
    try {
      const response = await axios.post('http://localhost:5000/api/authorization-requests', formData);
      console.log('Form submitted successfully', response.data);
      
    
      alert('Request submitted successfully!');
      window.location.reload();
    } catch (error) {
      
      if (error.response && error.response.data.errors) {
        console.error('Validation Errors:', error.response.data.errors);
       
        setErrorMessages(error.response.data.errors);
      } else {
        console.error('Error submitting form:', error);
        setErrorMessages([{ msg: 'An unexpected error occurred. Please try again.' }]); 
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-5">Authorization Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Patient ID:</label>
          <input
            type="text"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Treatment:</label>
          <input
            type="text"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Doctor's Notes:</label>
          <textarea
            name="doctorsNotes"
            value={formData.doctorsNotes}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">
          Submit
        </button>

      
        {errorMessages && (
          <div className="error-messages mt-4">
            {errorMessages.map((error, index) => (
              <p key={index} className="text-red-500">
                {error.msg}
              </p>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthorizationForm;
