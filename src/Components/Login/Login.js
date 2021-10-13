import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {signUsingGoogle} = useAuth();
    return (
        <div>
           <h1>Please Log In</h1>
           <button onClick={signUsingGoogle}>Google Sign In</button>
           <Link to="/register">Register</Link>  
        </div>
    );
};

export default Login;