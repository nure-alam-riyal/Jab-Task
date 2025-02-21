import { createContext, useEffect, useState } from "react";
import {  signInWithEmailAndPassword,updateProfile,GoogleAuthProvider,signInWithPopup,signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
// import toast, { useToasterStore } from "react-hot-toast";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const userAxios=useAxios()
    const [user,setUser]=useState('')
    const [loading,SetLoading]=useState(true)
    
    const createUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Updateprofile= async(name,photo)=>{
        SetLoading(true)
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
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     const signInGoogle = () => {
        SetLoading(true)
         return signInWithPopup(auth, provider)
     }
    const data={
        login,
        signInGoogle,LogOut,Updateprofile,loading,user,createUser
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handaleuser=()=>{
        const unSubscribe=  onAuthStateChanged(auth,(CurretUser=>{
            setUser(CurretUser)
                    //console.log(CurretUser)
                    SetLoading(false)
                    if(CurretUser){
                       const userInfo={
                           email:CurretUser?.email,
                           userName:CurretUser?.displayName,
                           image:CurretUser?.photoURL,
                          
                       }
                       //console.log(userInfo)
                     userAxios.post('/user',userInfo).then(res=>{
                       if(res.data.insertedId){
                                 toast.success("user login")
                       }
                      })
                  //   axiosPublic.post('/jwt',{ email:CurretUser?.email})
                  //   .then(res=>{
                  //      if(res.data.token){
                  //          localStorage.setItem('token',res.data.token)
                  //      }
                  //   })

                    }
                    else{
                      //  localStorage.removeItem('token')
                    }
      }))
      return ()=>unSubscribe()
    }
    useEffect(()=>{
        handaleuser()
     },[handaleuser])
    return (
        <AuthContext value={data}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;