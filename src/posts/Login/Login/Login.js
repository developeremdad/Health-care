import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const handleButtonClick = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);

            })

    }
    return (
        <div>
            <h2>Loging page</h2>

            <button onClick={handleButtonClick}>signing with google</button>
        </div>
    );
};

export default Login;