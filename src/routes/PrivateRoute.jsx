import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center my-12'>
            <progress className="progress progress-success w-56"></progress>
        </div>
    }
    else if (user) {
        return children
    }


    else{
        Swal.fire({
            title: 'Warning!',
            text: 'You have to log in first to view details',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
          return (
            <Navigate to='/login' state={{from: location}}></Navigate>
        );
    }

    
};

export default PrivateRoute;