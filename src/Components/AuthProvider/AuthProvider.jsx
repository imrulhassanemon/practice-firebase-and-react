import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
export const AuthContext = createContext(null)

    const AuthProvider = ({children}) => {
        const name = 'kutti'
        const [user, setUser] = useState(null)

        const createUser = (email, password) =>{
           return createUserWithEmailAndPassword(auth, email, password);
        }

        const signInUser = (email, password) => {
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
            return signOut(auth)
        }

        useEffect(()=>{
           const unsubscribe =  onAuthStateChanged(auth, currentUser => {
                if(currentUser){
                    console.log('Current user',currentUser);
                    setUser(currentUser)

                }
            })
            return () => {
                unsubscribe();
            }
        },[])
        
        const itemInfo = {
            name,
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