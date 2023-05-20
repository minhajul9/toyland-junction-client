import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center my-12'>
            <progress className="progress progress-success w-56"></progress>
        </div>
    }
    if (user) {
        return children
    }


    return (
        <Navigate to='/login' state={{from: location}}></Navigate>
    );
};

export default PrivateRoute;