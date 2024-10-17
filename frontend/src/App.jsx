import React from 'react';
import PatientList from './components/PatientList';
import PriorAuthForm from './components/PriorAuthForm';
import Footer from './components/Footer';

function App() {
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
        <div className="flex-1 bg-grey shadow-lg rounded-lg p-6 mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Search Patients</h2>
          <PatientList />
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Prior Authorization</h2>
          <PriorAuthForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
