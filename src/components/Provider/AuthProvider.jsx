import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const user = { email : 'toy@junction.com'}

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;