import React from 'react';

function PatientProfile({ patient }) {
  if (!patient) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 text-lg">No patient data available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {patient.name}
        </h3>
        <h4 className="text-md font-semibold text-gray-600 mb-2">Medication History</h4>
        <ul className="list-disc pl-5 space-y-2">
          {patient.medicationHistory && patient.medicationHistory.length > 0 ? (
            patient.medicationHistory.map((medication, index) => (
              <li key={index} className="text-gray-700">
                {medication}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No medications found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default PatientProfile;
