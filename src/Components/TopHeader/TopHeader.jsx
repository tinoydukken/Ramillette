import React from 'react'
import './TopHeader.css'
import location from '../../assets/images/location.svg'
import mail from '../../assets/images/mail.svg'
import instagram from '../../assets/images/instgram.svg'
import instagramhover from '../../assets/images/instgram-blue.svg'
import facebook from '../../assets/images/facebook.svg'
import facebookhover from '../../assets/images/facebook-blue.svg'
import youtube from '../../assets/images/youtube.svg'
import youtubehover from '../../assets/images/youtube-blue.svg'
import usd from "../../assets/images/usd.png"
import india from "../../assets/images/india.png"
import { useState } from 'react'
const currencyOptions = [
    { code: "USD", flag: usd },
    { code: "INR", flag: india }
];


export default function Topheader() {
    const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <>
            <div className="top-header-sec">
                <div className="wrapper">
                    <div className="top-header-row">
                        <div className="topheader-col1">
                            <div className="store-location">
                                <a href="#">
                                    <span><img src={location} alt="" /></span>
                                    <span>Store Location</span>
                                </a>
                            </div>
                            <div className="store-mail">
                                <a href="#">
                                    <span><img src={mail} alt="" /></span>
                                    <span>ismail@ramillette.com</span>
                                </a>
                            </div>
                        </div>
                        <div className="top-header-col2">
                            <p><a href="#">New Collection Alert: Discover Our Latest Perfumes Today!</a></p>
                        </div>
                        <div className="top-header-col3">
                            <div className="currency-selector">
                                <button
                                    className="currency-button"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <span className="flag"><img src={selectedCurrency.flag} alt="" /></span>
                                    <span className="code">{selectedCurrency.code}</span>
                                </button>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="dropdown-menu">
                                        {currencyOptions.map((currency) => (
                                            <div
                                                key={currency.code}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setSelectedCurrency(currency);
                                                    setDropdownOpen(false);
                                                }}
                                            >
                                                <span className="flag"><img src={currency.flag} alt="" /></span>
                                                <span className="code">{currency.code}</span>
                                            </div>
                                        ))}
                                    </div>  
                                )}
                            </div>
                            <div className="top-header-social">
                                <div class="header-social-icons">
                                    <div class="header-social">
                                        <a href="#" target="_blank">
                                            <span class="social-icon">
                                                <img src={facebook} alt="" />
                                                <span class="hover-icon">
                                                    <img src={facebookhover} alt="" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="header-social">
                                        <a href="#" target="_blank">
                                            <span class="social-icon">
                                                <img src={instagram} alt="" />
                                                <span class="hover-icon">
                                                    <img src={instagramhover} alt="" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="header-social">
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <span class="social-icon">
                                                <img src={youtube} alt="" />
                                                <span class="hover-icon">
                                                    <img src={youtubehover} alt="" />
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
