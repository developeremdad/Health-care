import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isToggle, setIsToggle] = useState(false);
    // handle firebase auth 
    const { signInWithGoogle, handleSubmitForm, handleLoginForm, setUser, error, setError } = useAuth();
    // console.log(error);

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    // sign in with google 
    const handleButtonClick = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleLogin = e => {
        handleLoginForm(e)
            .then(result => {
                history.push(redirect_url);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // get user name input value 
    const handleGetName = (e) => {
        setName(e.target.value)
    }

    // get email input values 
    const handleGetEmail = e => {
        setEmail(e.target.value);
    }
    // get password input value 
    const handleGetPassword = e => {
        setPassword(e.target.value);
    }

    // check login or not 
    const handleIsToggle = (e) => {
        setIsToggle(e.target.checked);
    }

    const handleSubmitButton = (e) => {
        handleSubmitForm(e)
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (

        <div className="mx-auto border p-5 form-container mt-2">
            <div className="text-center text-white">
                <h4 className="mb-2">Log in with</h4>
                <button onClick={handleButtonClick} className="login-btn">Google</button>
                <button className="login-btn">Git Hub</button>
            </div>
            <div className="text-center text-white mt-3"><p>or</p></div>
            <div>
                {isToggle && <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label text-light fw-bold">Your Name</label>
                    <input onBlur={handleGetName} type="text" placeholder="Mr. example" className="form-control input-field-custom" />
                </div>}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-light fw-bold">Email address</label>
                    <input onBlur={handleGetEmail} type="email" placeholder="example@gmail.com" className="form-control input-field-custom" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-light fw-bold">Password</label>
                    <input onBlur={handleGetPassword} type="password" placeholder="password" className="form-control input-field-custom" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onClick={handleIsToggle} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label check-box-custom" htmlFor="exampleCheck1">Don't have an account?</label>
                </div>
                {isToggle ? <button onClick={() => handleSubmitButton({ name, email, password })} type="submit" className="btn submit-btn w-100">Sign Up</button>
                    :
                    <button onClick={() => handleLogin({ email, password })} type="submit" className="btn submit-btn w-100">Log In</button>
                }
                {/* {error && <p className="text-light text-center mt-3">Errror: {error}</p>} */}
            </div>
        </div>

    );
};

export default Login;