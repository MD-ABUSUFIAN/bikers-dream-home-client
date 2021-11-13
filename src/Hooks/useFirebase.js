import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initialFirebase from "../Pages/Home/Shared/Login/Firebase/firebase.init";

initialFirebase();


const useFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState({});
    const [authError,setAuthError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [isAdmin,setIsAdmin] = useState(false);
    const auth = getAuth();


    // Email With Users Registered

    const emailRegistration=(data,location,history)=>{
        setIsLoading(true);

        createUserWithEmailAndPassword(auth,  data.email, data.password,data.displayName,location,history)
        .then((userCredential) => {  
            
             saveUserDatabase(data.displayName,data.email,"POST");
             setAuthError("");
            const destination=location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error) => {
            setAuthError (error.message);
        }).finally(()=>setIsLoading(false));
    }

 // Email With UsersLogin

    const emailLogin=(data,location,history)=>{
            setIsLoading(true); 
        signInWithEmailAndPassword(auth,data.email, data.password,location,history)
        .then((userCredential) => {
            const user = userCredential.user; 
            setUser(user)
            setAuthError("")
            const destination=location?.state?.from || '/';
            history.replace(destination)   
        })
        .catch((error) => {
        
            setAuthError(error.message)
        }).finally(()=>setIsLoading(false));
            }

            //User Google Login

    const googleLogin=(location,history)=>{
         setIsLoading(true)

         signInWithPopup(auth, googleProvider)
        .then((result) => {
                setUser(result.user)
                setAuthError("")
                saveUserDatabase(result?.user?.displayName,result?.user?.email,"PUT")
                const destination=location?.state?.from || '/';
                history.replace(destination)
          
                
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
      },[]);
      
      
      useEffect(()=>{
          fetch(`http://localhost:5000/allUser/${user.email}`)
          .then(res=>res.json())
          .then(data=>setIsLoading(data.admin))
      },[])


const saveUserDatabase=(displayName,email,method)=>{
    const user={displayName,email}
    fetch('http://localhost:5000/newUser',{
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }).then(res=>res.json())
    .then(data=>console.log(data))

}



return {
    user,
    authError,
    isAdmin,
    isLoading,
    emailRegistration,
    emailLogin,
    userLogOut,
    googleLogin
}

}

export default useFirebase;