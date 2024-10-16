import React from 'react';

function PatientProfile({ patient }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">Patient Profile</h2>
      <p>Name: {patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Medical History: {patient.medicalHistory}</p>
      <p>Insurance Provider: {patient.insuranceProvider}</p>
      <p>Insurance ID: {patient.insurance}</p>
      
    </div>
  );
}

export default PatientProfile;
