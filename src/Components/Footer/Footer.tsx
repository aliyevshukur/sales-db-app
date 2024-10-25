import React from 'react';
import './Footer.scss';
import SiteLogo from '../../Images/site-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo">
                            <img src={SiteLogo} alt="Company Logo" />
                            <h2>Planet Resonance</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/reciepts">Reciepts</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                            <li><a target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                            <li><a target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="line" />
                </div>
                <div className="row">
                    <div className="copyright">
                        <p>&copy; 2023 Company Name. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;