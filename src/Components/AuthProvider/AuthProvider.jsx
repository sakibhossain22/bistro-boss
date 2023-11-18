
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../../firebase.config";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
export const AuthContext = createContext(null)
const Auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const axiosSecure = useAxiosSecure()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const registerWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(Auth, googleProvider)
    }
    const logOutUser = () => {
        signOut(Auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            const userInfo = {email : currentUser?.email}
            if(currentUser){
                axiosSecure.post('/jwt',userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])
    const info = {
        user,
        loading,
        registerWithEmail,
        googleLogin,
        loginWithEmail,
        logOutUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;