import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initialFirebase from "../Pages/Home/Shared/Login/Firebase/firebase.init";

initialFirebase();


const useFirebase=()=>{

    const [user,setUser]=useState([]);
    const [authError,setAuthError] = useState([]);
    const auth = getAuth();



    const emailRegistration=(data)=>{

        createUserWithEmailAndPassword(auth,  data.email, data.password,data.displayName)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
           
            setAuthError (error.message);
        });
    }


    const emailLogin=(data)=>{

        signInWithEmailAndPassword(auth,data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user)
        })
        .catch((error) => {
        
            setAuthError(error.message)
        });
            }

            const googleLogin=()=>{
                const googleProvider = new GoogleAuthProvider();
                signInWithPopup(auth, googleProvider)
                .then((result) => {
        
                    setUser(result.user)
                 
                }).catch((error) => {
                    
                   setAuthError(error.message);
                  
        
                });
            }


            const userLogOut=()=>{
                signOut(auth).then(() => {
                   
                  }).catch((error) => {
                    setAuthError(error.message)
                  });
            }



      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              setUser({})
            }
          });
      },[])      






return {
    user,
    authError,
    emailRegistration,
    emailLogin,
    userLogOut,
    googleLogin
}

}

export default useFirebase;