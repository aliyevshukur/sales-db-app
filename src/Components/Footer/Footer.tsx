import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';
import SiteLogo from '../../Images/site-logo.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer">
                <Logo />

                <div className="footer-links">
                    <div className="footer-links-row">
                        <h4 className='footer-links-row-title'>Quick Links:</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/reciepts">Reciepts</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-row">
                        <h4 className='footer-links-row-title'>Follow Us:</h4>
                        <ul>
                            <li><a target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={"1rem"} /> Facebook</a></li>
                            <li><a target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={"1rem"} /> Instagram</a></li>
                            <li><a target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={"1rem"} /> X (Twitter)</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-row">
                        <h4 className='footer-links-row-title'>Rosenance</h4>
                        <ul>
                            <li>2475 Hyperion Drive</li>
                            <li>NeoCity, CA 90210</li>
                            <li>United States</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <div className="line" />
                </div>
                <div className="footer-row">
                    <div className="copyright">
                        <p>&copy; 2023 Company Name. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;