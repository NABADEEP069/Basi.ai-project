import React from 'react';

function PriorAuthForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Treatment Type</label>
        <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block text-gray-700">Insurance Plan</label>
        <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded" />
      </div>
      <div>
  <label className="block text-gray-700">Date of service</label>
  <input 
    type="date" 
    className="mt-1 p-2 w-full border border-gray-300 rounded" 
    required // eitu e makes the input required kore
  />
</div>

      <div>
        <label className="block text-gray-700">Diagnosis code</label>
        <input type="text" className="mt-1 p-2 w-full border border-gray-300 rounded" />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
        Submit
      </button>
    </form>
  );
}

export default PriorAuthForm;
