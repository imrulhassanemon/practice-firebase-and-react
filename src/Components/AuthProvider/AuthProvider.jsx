import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext } from 'react';
import { auth } from '../../firebase.init';
export const AuthContext = createContext(null)

    const AuthProvider = ({children}) => {
        const name = 'kutti'

        const createUser = (email, password) =>{
           return createUserWithEmailAndPassword(auth, email, password);
        }
        
        const itemInfo = {
            name,
            createUser
        }
    return (
        <AuthContext.Provider value={itemInfo}>
            {children}
        </AuthContext.Provider>
    );
};

    export default AuthProvider