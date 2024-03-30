import React , { useState } from 'react'
import { useSelector } from 'react-redux';


import axios from 'axios'; // import axios in your dashboard component

// Replace placeholder with axios post request

function Dashboard() {
  const [clinic, setClinic] = useState({ name: '', address: '', image: '' });

  const handleChange = (e) => {
    setClinic({ ...clinic, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Exit the function if the user object or ID is not defined.
    if (!user || !user._id) {
      console.error('User ID is not defined.');
      return;
    }
  
    // send POST request to /clinics endpoint with clinic data
    try {
      const response = await axios.post('http://localhost:5000/api/clinics', { ...clinic, medicalWorker: user._id });
  
      if(response.data) {
        // reset the form
        setClinic({ name: '', address: '', image: '', });
      }
    } catch (err) {
      console.error(err);
    }
  }

  const user = useSelector(state => state.auth.auth.user);

  if (user?.role !== 'medicalStoreWorker') {
    return <div>You are not authorized to view this page</div>;
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
            Clinic Name:
            <input id="name" name="name" type="text" aria-label="Enter the clinic name" required value={clinic.name} onChange={handleChange} />
        </label>
        <label htmlFor="address">
            Address:
            <input id="address" name="address" type="text" aria-label="Enter the address" required value={clinic.address} onChange={handleChange} />
        </label>
        {/* and so on for other fields... */}
        <button type="submit">Create Clinic</button>
      </form>
    </div>
  )
}

export default Dashboard;