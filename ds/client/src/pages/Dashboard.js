import React from 'react'
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector(state => state.auth.auth.user);

  if (user?.role !== 'medicalStoreWorker') {
    return <div>You are not authorized to view this page</div>;
  }

  return (
    <div>
        Dashboard for Medical Store Workers
    </div>
  )
}

export default Dashboard;