import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>{user.displayName}</h1> 
        </div>
    );
};

export default Home;