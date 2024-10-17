import React, { useState } from 'react';

function PriorAuthorizationForm() {
  const [formData, setFormData] = useState({
    treatmentType: '',
    insurancePlan: '',
    dateOfService: '',
    diagnosisCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const message = await response.text();
        alert(message);
        setFormData({
          treatmentType: '',
          insurancePlan: '',
          dateOfService: '',
          diagnosisCode: '',
        });
      } else {
        const errorText = await response.text();
        alert('Error submitting form: ' + errorText);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Prior Authorization Form
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Treatment Type</label>
          <input
            type="text"
            name="treatmentType"
            value={formData.treatmentType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter treatment type"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Insurance Plan</label>
          <input
            type="text"
            name="insurancePlan"
            value={formData.insurancePlan}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter insurance plan"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Date of Service</label>
          <input
            type="date"
            name="dateOfService"
            value={formData.dateOfService}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Diagnosis Code</label>
          <input
            type="text"
            name="diagnosisCode"
            value={formData.diagnosisCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter diagnosis code"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PriorAuthorizationForm;
