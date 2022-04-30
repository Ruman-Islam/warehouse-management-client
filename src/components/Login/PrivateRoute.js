import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default PrivateRoute;