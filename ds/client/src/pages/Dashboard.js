import React , { useState } from 'react'
import { useSelector } from 'react-redux';


import axios from 'axios'; // import axios in your dashboard component

// Replace placeholder with axios post request

function Dashboard() {
  const [clinic, setClinic] = useState({ name: '', address: '', image: '' });

  const handleImageChange = (e) => {
    setClinic({ ...clinic, [e.target.name]: e.target.files[0] });
    console.log(e.target.files[0]);
  };
  const handleChange = (e) => {
    setClinic({...clinic, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myFile', clinic.image); // get the image file from state

    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]); 
    }

    // Provide response variable
    try {
      const response = await axios.post('/api/clinics', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      });
      
      if(response.data) {
        setClinic({ name: '', address: '', image: '' });
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
      <form action="/upload" method="post" encType="multipart/form-data" onSubmit={handleFormSubmit}>
        <label htmlFor="name">
            Clinic Name:
            <input id="name" name="name" type="text" aria-label="Enter the clinic name" required value={clinic.name} onChange={handleChange} />
        </label>
        <label htmlFor="address">
            Address:
            <input id="address" name="address" type="text" aria-label="Enter the address" required value={clinic.address} onChange={handleChange} />
        </label>
        <label htmlFor="image">
          Clinic Image:
          <input type="file" name="myFile" accept="image/*" onChange={handleImageChange} />
        </label>
        {/* and so on for other fields... */}
        <button type="submit">Create Clinic</button>
      </form>
    </div>
  )
}

export default Dashboard;