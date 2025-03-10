import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
// import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }



    const userInformation = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signInGoogle,
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
           setUser(user);
           setLoading(false)
        })
    }, []);
    
    return (
        <AuthContext.Provider value={userInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.object
}