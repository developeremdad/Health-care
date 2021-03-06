import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-danger" to="/home">Medico Clinic</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/appointment">Appointment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                {user.email
                                    ?
                                    <span><Link className="nav-link d-inline-block" onClick={logOut} to="/home"><b>Logout: </b></Link>{user.displayName ? user.displayName : user.email.substring(0, user.email.lastIndexOf("@"))}</span>
                                    :
                                    <Link className="nav-link" to="/login">Register</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;