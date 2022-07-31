import React from 'react';
import AdminNavbar from '../components/adminNavbar';
import AdminBody from '../components/adminBody';
import { Navigate } from 'react-router-dom';


function Admin() {
  let token = JSON.parse(localStorage.getItem('token'));
  return (<>

      {
        token ? <div>
          <AdminNavbar />
          <AdminBody />
        </div> : <Navigate to="/login" replace />
      }
    </>
  );
}

export default Admin;