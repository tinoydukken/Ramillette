import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/images/logo.png"
import footinstagram from '../../assets/images/instgram-hover.svg'
import footinstagramhover from '../../assets/images/instgram.svg'
import footfacebook from '../../assets/images/facebook-hover.svg'
import footfacebookhover from '../../assets/images/facebook.svg'
import footyoutube from '../../assets/images/youtube-hover.svg'
import footyoutubehover from '../../assets/images/youtube.svg'

export default function Footer() {
    return (
        <div>
            <div className="footer-sec">
                <div className="wrapper">
                <div className="footer-row">
                    <div className="footer-col1">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="" />
                        </div>
                        <div className="footer-header-social">
                            <div class="footer-social-icons">
                                <div class="footer-social">
                                    <a href="#" target="_blank">
                                        <span class="social-icon">
                                            <img src={footfacebookhover} alt="" />
                                            <span class="hover-icon">
                                                <img src={footfacebook} alt="" />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div class="footer-social">
                                    <a href="#" target="_blank">
                                        <span class="social-icon">
                                            <img src={footinstagramhover} alt="" />
                                            <span class="hover-icon">
                                                <img src={footinstagram} alt="" />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div class="footer-social">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <span class="social-icon">
                                            <img src={footyoutubehover} alt="" />
                                            <span class="hover-icon">
                                                <img src={footyoutube} alt="" />
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col2">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Terms & policies</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

