import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-gray-700 p-4">Patient List</h2>
      
      <div className="p-4">
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      
      <ul className="divide-y divide-gray-300">
        {filteredPatients.length > 0 ? (
          filteredPatients.map(patient => (
            <li
              key={patient.id || patient.name} 
              className="p-4 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={() => handlePatientClick(patient)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{patient.name}</h3>
             
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">Sorry, No patients found.</li>
        )}
      </ul>

      {selectedPatient && (
  <div className="mt-4 p-4 bg-gray-100 rounded-md">
    <h3 className="text-lg font-bold text-gray-800">Patient Details</h3>
    
    <p className="text-gray-600">Name: {selectedPatient.name}</p>
    <p className="text-gray-600">Age: {selectedPatient.age}</p>
    <p className="text-gray-600">Medical History: {selectedPatient.medicalHistory}</p>
    <div className="flex justify-center mt-2"> {/* Flex container to center the button */}
      <button 
        className="p-2 bg-pink-500 text-white rounded-md"
        onClick={() => setSelectedPatient(null)} 
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default PatientList;
