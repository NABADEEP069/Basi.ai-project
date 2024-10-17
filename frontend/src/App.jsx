import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientList from './components/PatientList';
import PriorAuthForm from './components/PriorAuthForm';
import PatientProfile from './components/PatientProfile';
import Footer from './components/Footer';


function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white bg-opacity-70 shadow-lg rounded-lg p-6 mb-8 transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-blue-600">Patient Health Dashboard</h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center text-red-800">Welcome to our Site, here you can treat your body a better way!</h1>
      </div>
      <br />
      <br />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4 text-center">Search Patients</h2>
          {loading ? (
            <p>Loading patients...</p>
          ) : (
            <PatientList patients={patients} setSelectedPatient={setSelectedPatient} />
          )}
        </div>

        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Prior Authorization</h2>
          <PriorAuthForm selectedPatient={selectedPatient} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
