import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
             <Link to='/home'>Home</Link>
             <Link to="/register">Register</Link>
             <Link to="/login">Log In</Link>
             <Link to="/shopping">Shopping</Link>
             <span>{user.displayName}</span>
             {user.email && <button onClick={logOut}>Log out</button>}
        </div>
    );
};

export default Header;