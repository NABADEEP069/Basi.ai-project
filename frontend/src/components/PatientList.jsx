import React, { useState, useEffect } from 'react';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      // we have to Replace this with your actual API call
      const response = await fetch('/api/patients');
      const data = await response.json();
      setPatients(data);
    };

    fetchPatients();
  }, []);

 
  const examplePatients = [
    { id: 1, name: 'Nilim Das', age: 17, condition: 'Flu' },
    { id: 2, name: 'Rahul Son Boro', age: 27, condition: 'Piles' },
    { id: 3, name: 'Prashant Sharma', age: 22, condition: 'Covid-19' },
    { id: 4, name: 'Gargi Baishya', age: 21, condition: 'Back pain' },
  ];

  return (
    <div>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border p-2 mb-4 w-full"
      />

      
      <h2 className="font-semibold mb-2">Example Patients:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {examplePatients.map((patient) => (
          <div key={patient.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-lg font-semibold">{patient.name}</h3>
            <p className="text-gray-600">Age: {patient.age}</p>
            <p className="text-gray-600">Condition: {patient.condition}</p>
          </div>
        ))}
      </div>

     
      <ul>
        {patients
          .filter((patient) =>
            patient.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((patient) => (
            <li key={patient.id}>
              {patient.name} - {patient.age} years old - {patient.condition}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PatientList;
