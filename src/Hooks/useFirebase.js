import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../posts/Login/firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google button click 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    };


    // log out when button click 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });

    };

    // sign in using email and password 
    const handleSubmitForm = e => {
        // e.preventDefault();
        const { name, email, password } = e;

        const findUser = auth.currentUser;
        if (findUser) {
            console.log(findUser);
            updateProfile(auth.currentUser, {
                displayName: name
            }).then((result) => {
                setUser(result.user);
            })
        }
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // log in using email and password
    const handleLoginForm = e => {

        const { email, password } = e;
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        handleSubmitForm,
        handleLoginForm
    }

};

export default useFirebase;