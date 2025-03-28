import React from "react";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";
import search from "../../assets/images/search.png";
import wishlist from "../../assets/images/wishlist.png";
import cart from "../../assets/images/shopping-bag.png";
import user from "../../assets/images/people.png";
import { useState, useEffect } from "react";




export default function NavBar() {
    const textArray = ["Perfumes", "Fragrence"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting && charIndex < textArray[textIndex].length) {
                setCurrentText((prev) => prev + textArray[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setCurrentText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === textArray[textIndex].length) {
                setTimeout(() => setIsDeleting(true), newTextDelay);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % textArray.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? erasingDelay : typingDelay);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex]);



    return (
        <>
            <div className="header-sec">
                <div className="wrapper">
                    <div className="header-row">
                        <div className="header-col1">
                            <div className="logo">
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="header-col2">
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="menu-item" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                        <a href="#">Men</a>
                                        {isOpen && (
                                            <div className="mega-menu">
                                                <div className="mega-column">
                                                    <h4>Top Brands For Men</h4>
                                                    <a href="#">Azzaro</a>
                                                    <a href="#">Bvlgari</a>
                                                    <a href="#">Ferrari</a>
                                                    <a href="#">Giorgio Armani</a>
                                                    <a href="#">Hugo Boss</a>
                                                    <a href="#">Issey Miyake</a>
                                                    <a href="#">Jaguar</a>
                                                    <a href="#">Paco Rabanne</a>
                                                </div>
                                                <div className="mega-column">
                                                    <h4>Select By Price</h4>
                                                    <a href="#">Price above 6500</a>
                                                    <a href="#">Price 6000 - 4500</a>
                                                    <a href="#">Price 4500 - 3500</a>
                                                    <a href="#">Price 3500 - 2500</a>
                                                    <a href="#">Price 2500 -1800</a>
                                                    <a href="#">Price 1500 - 1000</a>
                                                </div>
                                                <div className="mega-column">
                                                    <h4>Gift Sets & Combos</h4>
                                                    <a href="#">Miniatures</a>
                                                    <a href="#">After Shaves</a>
                                                    <a href="#">Deodorants</a>
                                                    <a href="#">Shower Gels</a>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <a href="#">Women</a>
                                    </li>
                                    <li>
                                        <a href="#">Brands</a>
                                    </li>
                                    <li>
                                        <a href="#">Sale</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-col3">
                            <div className="cart-sec">
                                <div className="cart-menus">
                                    <div className="cart-icons">
                                        <form role="search" method="get" className="search-form form" action="">
                                            <button type="submit" className="search-submit button">
                                                <img src={search} alt="Search" />
                                            </button>
                                            <input
                                                type="text"
                                                placeholder={`Search By ${currentText}`}
                                                className="search-input"
                                            />
                                        </form>
                                        <a href="#" className="cart-icon">
                                            <img src={user} alt="" />
                                        </a>
                                        <a href="#" className="cart-icon">
                                            <img src={wishlist} alt="" />
                                            <div className="cart-items">
                                                5
                                            </div>
                                        </a>
                                        <a href="#" className="cart-icon">
                                            <img src={cart} alt="" />
                                            <div className="cart-items">
                                                1
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
