import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()


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
        const signInWithGoogle = () => {
            signInWithPopup(auth, googleProvider)
            .then((result)=>{
                console.log(result.user);
                
            }) 
            .catch(error => {
                console.log(error.message);
            })
        }

        const signOutUser = () => {
            setLoading(true)
            return signOut(auth)
        }

        useEffect(()=>{
           const unsubscribe =  onAuthStateChanged(auth, currentUser => {

                    console.log('Current user',currentUser);
                    setUser(currentUser)
                    setLoading(false)
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
            signInWithGoogle
        }
    return (
        <AuthContext.Provider value={itemInfo}>
            {children}
        </AuthContext.Provider>
    );
};

    export default AuthProvider