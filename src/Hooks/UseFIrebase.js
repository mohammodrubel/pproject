import firebaseInit from './../Components/FIrebase/FirebaseInit/FirebaseInit';
import { getAuth, createUserWithEmailAndPassword,sendPasswordResetEmail,signInWithPopup,GoogleAuthProvider,updateProfile,FacebookAuthProvider ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


firebaseInit()

const useFirebase = ()=>{
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')
    const [admin,setAdmin] = useState(false)
    const auth = getAuth();

    // REGISTRATION 
    const registerUser= (email,password,name,navigate)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setError('')
            const newUser = {email:email,displayName:name}
            setUser(newUser)
            saveData(email,name,'POST')
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              
            }).catch((error) => {
              
            });
            
            navigate('/')
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(()=>setIsLoading(false));
    }

    // LOGIN 
    const loginUser = (email,password,location,navigate)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const dastination = location?.state?.from || '/'
          navigate(dastination)
            setError('')
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    // LOGOUT 
    const logout=  ()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }
    // GOOGLE
    const googleSingin = (location,navigate)=>{
      setIsLoading(true)
      signInWithPopup(auth,googleProvider)
      .then(result =>{
          const user = result.user
          saveData(user.email,user.displayName,'PUT')
          const dastination = location?.state?.from || '/'
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
    })
    .finally(()=>setIsLoading(false));
  }

  // FACEBOOK 
  // location,navigate
  const handleFacebook = ()=>{
    setIsLoading(true)
      signInWithPopup(auth,facebookProvider)
      .then(result =>{
          const user = result.user
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
    })
    .finally(()=>setIsLoading(false));
  }

  // RESET 
  const resetEmail = (email) =>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

    // ON AUTH STARTE CHANGE 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          setIsLoading(true)
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return unSubscribe
    },[])

    const saveData = (email,displayName,method) =>{
      const user = {email,displayName}
      fetch('http://localhost:5000/user',{
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
        .then(res => {
            
        })
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`)
        .then(Response => Response.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    return{
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        error,
        googleSingin,
        handleFacebook,
        resetEmail,
        admin
    }
}
export default useFirebase

