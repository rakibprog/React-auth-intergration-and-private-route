import { useEffect, useState } from "react";
import initiliazeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
initiliazeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signUsingGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user, 'state change');
                setUser(user);
            }
        });
    }, []);
    return {
        signUsingGoogle,
        user,
        error,
        logOut
    }
}
export default useFirebase;