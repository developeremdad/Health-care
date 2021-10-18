import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth()
    return (
        <div>
            <h2>Loging page</h2>
            <button onClick={signInWithGoogle}>signing with google</button>
        </div>
    );
};

export default Login;