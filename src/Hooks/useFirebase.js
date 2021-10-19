import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../posts/Login/firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // sign in with google button click 
    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));

    };


    // log out when button click 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

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
                .catch(error => {
                    setError(error.message);
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
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        signInWithGoogle,
        user,
        setUser,
        isLoading,
        error,
        setError,
        logOut,
        handleSubmitForm,
        handleLoginForm
    }

};

export default useFirebase;