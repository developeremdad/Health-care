import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container mt-4">
                <div className="row w-100 mx-auto p-3">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h5>ABOUT US</h5>
                        <hr className="divider" />
                        <p>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process.</p>
                        <span><i className="footer-icon fab fa-facebook-square"></i></span>
                        <span><i className="footer-icon fab fa-whatsapp-square"></i></span>
                        <span><i className="footer-icon fab fa-twitter-square"></i></span>
                        <span><i className="footer-icon fab fa-instagram-square"></i></span>
                        <span><i className="footer-icon fab fa-youtube-square"></i></span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <h5>ADDRESS</h5>
                        <hr className="divider" />
                        <p><span><i className="fas fa-map-marker-alt me-2"></i></span> Banani, Dhaka, Bangladesh</p>
                        <p><span><i className="fas fa-phone-alt me-2"></i></span> +8801625360571</p>
                        <p><span><i className="fas fa-envelope me-2"></i></span> developeremdad@gmail.com</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <h5>QUICK ACCESS</h5>
                        <hr className="divider" />

                        <p><Link className="footer-nav text-black" to="/home">Home</Link></p>
                        <p><Link className="footer-nav text-black" to="/about">About</Link></p>
                        <p><Link className="footer-nav text-black" to="/services">Services</Link></p>
                        <p><Link className="footer-nav text-black" to="/contact">Contact</Link></p>

                    </div>
                </div>
            </div>
            <p className="text-center bg-black text-light p-3 m-0">&copy; All Right Reserved By || Developer Emdad</p>
        </div>
    );
};

export default Footer;