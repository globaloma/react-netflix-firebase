import { createContext, useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"
import {auth} from "../config/firebase"
import {db} from "../config/firebase"
import {setDoc, doc} from "firebase/firestore"

const Authcontext = createContext();

export function AuthcontextProvider({ children }) {
const [user, setUser] = useState({})

 function signUp(email,password){
     createUserWithEmailAndPassword(auth, email,password)
     setDoc(doc(db, "users", email), {
        savedShows: []
     })
}

 function signIn(email,password){
    return  signInWithEmailAndPassword(auth, email,password)
}
 function logOut(){
    return  signOut(auth)
}
useEffect(()=>{
    const unSuscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    });
    return ()=>{
        unSuscribe();
    }
})

    return (
        <Authcontext.Provider value={{user,signUp, signIn, logOut}}>
            {children}
        </Authcontext.Provider>
    )
}
export function UserAuth() {
    return useContext(Authcontext)
}