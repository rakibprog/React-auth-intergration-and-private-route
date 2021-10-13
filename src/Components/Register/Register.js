import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <h1>Please Register</h1>
           <form>
               <input type="text"/>
               <br />
               <input type="password"/>
               <br />
               <input type="submit" value="submit"/>
               <br />
               <Link to="/login">Already Register?</Link>
           </form>
        </div>
    );
};

export default Register;