import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
export const AuthContext = createContext(null)

    const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)

        const createUser = (email, password) =>{
            setLoading(true)
           return createUserWithEmailAndPassword(auth, email, password);
        }

        const signInUser = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
        // onAuthStateChanged(auth, currentUser => {
        //     if(currentUser){
        //         console.log('Currently Logged User', currentUser)
        //     }else{
        //         console.log("No use logged In");
        //     }
        // })

        const signOutUser = () => {
            setLoading(true)
            return signOut(auth)
        }

        useEffect(()=>{
           const unsubscribe =  onAuthStateChanged(auth, currentUser => {
                if(currentUser){
                    console.log('Current user',currentUser);
                    setUser(currentUser)
                    setLoading(false)

                }
            })
            return () => {
                unsubscribe();
            }
        },[])
        
        const itemInfo = {
           loading,
            user,
            createUser, 
            signInUser,
            signOutUser,
        }
    return (
        <AuthContext.Provider value={itemInfo}>
            {children}
        </AuthContext.Provider>
    );
};

    export default AuthProvider