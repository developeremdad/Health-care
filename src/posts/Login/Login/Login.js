import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
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

        <div className="w-50 mx-auto border p-5 form-container mt-5">
            <div className="text-center text-white">
                <h4 className="mb-3">Log in with</h4>
                <button onClick={handleButtonClick} className="login-btn">Google</button>
                <button className="login-btn">Git Hub</button>
            </div>
            <div className="text-center text-white mt-3"><p>or</p></div>
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-light fw-bold">Email address</label>
                    <input type="email" placeholder="example@gmail.com" className="form-control input-field-custom" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-light fw-bold">Password</label>
                    <input type="password" placeholder="password" className="form-control input-field-custom" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label check-box-custom" htmlFor="exampleCheck1">Don't have an account?</label>
                </div>
                <button type="submit" className="btn submit-btn w-100">Log In</button>
                {/* <p className="text-light text-center mt-3">Don't have an account?</p> */}
            </form>
        </div>

    );
};

export default Login;