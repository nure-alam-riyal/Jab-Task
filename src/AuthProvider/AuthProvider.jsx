import { createContext, useState } from "react";
import {  signInWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,SetLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    const Updateprofile= async(name,photo)=>{
        return  updateProfile(auth.currentUser,{
          displayName:name,
          photoURL:photo,
   })
      }
      const LogOut = () => {
        SetLoading(true)
        return signOut(auth)
    }


    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
     const signInGoogle = () => {
        SetLoading(true)
         return signInWithPopup(auth, provider)
     }
    const data={
        login,
        signInGoogle,LogOut,Updateprofile,loading,user
    }
    return (
        <AuthContext value={data}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;