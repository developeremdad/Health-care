import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="row p-3">
            <div className="col-lg-4 col-md-6 col-12">
                <h4>ABOUT US</h4>
                <hr className="divider" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quibusdam eaque itaque dolore consequuntur eveniet cum quisquam mollitia natus, qui provident vero facere ipsa harum esse! Ipsa itaque cumque nostrum.</p>
                <span><i class="fab fa-facebook-square"></i></span>
                <span><i class="fab fa-whatsapp-square"></i></span>
                <span><i class="fab fa-twitter-square"></i></span>
                <span><i class="fab fa-instagram-square"></i></span>
                <span><i class="fab fa-youtube-square"></i></span>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <h4>ADDRESS</h4>
                <hr className="divider" />
                <p><span><i class="fas fa-map-marker-alt"></i></span> Banani, Dhaka, Bangladesh</p>
                <p><span><i class="fas fa-phone-alt"></i></span> +8801625360571</p>
                <p><span><i class="fas fa-envelope"></i></span> developeremdad@gmail.com</p>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <h4>QUICK ACCESS</h4>
                <hr className="divider" />
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;