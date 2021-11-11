import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initialFirebase from "../Pages/Home/Shared/Login/Firebase/firebase.init";

initialFirebase();


const useFirebase=()=>{

    const [user,setUser]=useState({});
    const [authError,setAuthError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();



    const emailRegistration=(data,location,history)=>{
        setIsLoading(true);

        createUserWithEmailAndPassword(auth,  data.email, data.password,data.displayName,location,history)
        .then((userCredential) => {

            const destination=location?.state?.from || '/';
            history.replace(destination);

            setAuthError("");
           
        })
        .catch((error) => {
           
            setAuthError (error.message);
        }).finally(()=>setIsLoading(false));
    }


    const emailLogin=(data,location,history)=>{
            setIsLoading(true);
            
        signInWithEmailAndPassword(auth,data.email, data.password,location,history)
        .then((userCredential) => {
            const user = userCredential.user; 
            setUser(user)

            const destination=location?.state?.from || '/';
            history.replace(destination)

            setAuthError("")
           
        })
        .catch((error) => {
        
            setAuthError(error.message)
        }).finally(()=>setIsLoading(false));
            }

            const googleLogin=(location,history)=>{
        const googleProvider = new GoogleAuthProvider();
                
                setIsLoading(true)
                signInWithPopup(auth, googleProvider)
                .then((result) => {
        
                    setUser(result.user)
                    const destination=location?.state?.from || '/';
                    history.replace(destination)
                    setAuthError("")
                 
                }).catch((error) => {   
                   setAuthError(error.message);
                }).finally(()=>setIsLoading(false));
            }


            const userLogOut=()=>{
                setIsLoading(true);
                
                signOut(auth).then(() => {
                    setAuthError("")
                  }).catch((error) => {
                    setAuthError(error.message);
                  }).finally(()=>setIsLoading(false));
            }



      useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
          
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return ()=>unsubscribe;
      },[])      






return {
    user,
    authError,
    isLoading,
    emailRegistration,
    emailLogin,
    userLogOut,
    googleLogin
}

}

export default useFirebase;