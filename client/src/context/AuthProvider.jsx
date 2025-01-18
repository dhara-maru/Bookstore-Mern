import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext= createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = ()=>{
        setLoading(true);
        signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Set the user and stop the loading state when the auth state changes
            setUser(currentUser);
            setLoading(false);
        });
    
        // Return the unsubscribe function for cleanup
        return () => unsubscribe();
    }, []);
    

    const authInfo = {
        user,
        createUser,
        loginWithGoogle
    }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider
