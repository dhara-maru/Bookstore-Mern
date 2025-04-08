import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { signOut, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data to MongoDB
            await fetch("https://bookstore-mern-backend-1q16.onrender.com/register-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: user.email,
                    uid: user.uid,
                    createdAt: new Date().toISOString(),
                }),
            });
            return userCredential;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        loading,
        login,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
