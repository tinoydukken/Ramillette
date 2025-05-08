import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";
import wishlist from "../../assets/images/wishlist.png";
import cart from "../../assets/images/shopping-bag.png";
import user from "../../assets/images/people.png";
import perfumeImg from "../../assets/images/perfume.png";
import login from "../../assets/images/login.png";
import signup from "../../assets/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";

export default function NavBar() {
  const navigate = useNavigate();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const textArray = ["Perfumes", "Fragrance"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token } = useSelector((state) => state.user);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ROSE Woman Perfume - 100ml",
      price: 539,
      quantity: 1,
      image: perfumeImg,
    },
  ]);

  const availableProducts = [
    {
      id: 101,
      name: "Narco Unisex",
      price: 499,
      oldPrice: 899,
      image: perfumeImg,
    },
    {
      id: 102,
      name: "Unisex Scents",
      price: 499,
      oldPrice: 849,
      image: perfumeImg,
    },
    {
      id: 103,
      name: "Blush Parfum",
      price: 499,
      oldPrice: 899,
      image: perfumeImg,
    },
    {
      id: 104,
      name: "Pure Musk",
      price: 499,
      oldPrice: 899,
      image: perfumeImg,
    },
    {
      id: 105,
      name: "WHITE Oud",
      price: 575,
      oldPrice: 999,
      image: perfumeImg,
    },
    {
      id: 106,
      name: "DATE Woman",
      price: 575,
      oldPrice: 999,
      image: perfumeImg,
    },
  ];

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

    const timer = setTimeout(
      handleTyping,
      isDeleting ? erasingDelay : typingDelay
    );
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="header-sec">
        <div className="wrapper">
          <div className="header-row">
            <div className="header-col1">
              <div className="logo">
                <p onClick={() => navigate("/")}>
                  <img src={logo} alt="logo" />
                </p>
              </div>
            </div>
            <div className="header-col2">
              <div className="header-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/product-list">Products</Link>
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
                    <form
                      role="search"
                      method="get"
                      className="search-form form"
                    >
                      <button type="submit" className="search-submit button">
                        <img src={search} alt="Search" />
                      </button>
                      <input
                        type="text"
                        placeholder={`Search By ${currentText}`}
                        className="search-input"
                      />
                    </form>
                    <div className="user-dropdown-wrapper">
                      <img
                        src={user}
                        alt="User"
                        className="user-icon"
                        onClick={() =>
                          setIsUserDropdownOpen(!isUserDropdownOpen)
                        }
                      />
                      {!token && isUserDropdownOpen && (
                        <div className="user-dropdown">
                          <Link to="/login" className="user-dropdown-item">
                            <span>
                              <img src={login} alt="" />
                            </span>{" "}
                            Login
                          </Link>
                          <Link to="/register" className="user-dropdown-item">
                            <span>
                              <img src={signup} alt="" />
                            </span>{" "}
                            Signup
                          </Link>
                        </div>
                      )}
                    </div>

                    <a href="#" className="cart-icon">
                      <img src={wishlist} alt="Wishlist" />
                      <div className="cart-items">5</div>
                    </a>
                    <a
                      href="#"
                      className="cart-icon"
                      onClick={() => setIsCartOpen(true)}
                    >
                      <img src={cart} alt="Cart" />
                      <div className="cart-items">{cartItems.length}</div>
                    </a>
                    <button
                      className="hamburger"
                      onClick={() => setIsMenuOpen(true)}
                    >
                      ☰
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <form
              role="search"
              method="get"
              className="search-form form mobilemenu"
            >
              <button type="submit" className="search-submit button">
                <img src={search} alt="Search" />
              </button>
              <input
                type="text"
                placeholder={`Search By ${currentText}`}
                className="search-input"
              />
            </form>
          </div>
        </div>
      </div>

      <div className={`mobile-menu-panel ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            ×
          </button>
        </div>
        <ul className="mobile-menu-list">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            {" "}
            <Link to="/ProductList">PRODUCTS</Link>
          </li>
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            {" "}
            <Link to="/About">ABOUT US</Link>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <div className="mobile-menu-footer">
          <button className="login-btn">
            <img src={user} alt="user" />
            Login
          </button>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      <div className={`shopping-drawer ${isCartOpen ? "active" : ""}`}>
        <div className="offer-panel">
          <div className="offer-header"></div>
          {availableProducts.map((p) => (
            <div className="offer-product" key={p.id}>
              <img src={p.image} alt={p.name} />
              <div>
                <h4>{p.name}</h4>
                <p>
                  ₹{p.price.toFixed(2)}{" "}
                  <span className="old-price">₹{p.oldPrice.toFixed(2)}</span>
                </p>
                <button onClick={() => addToCart(p)}>ADD TO CART →</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-panel">
          <div className="cart-header">
            <h2>CART</h2>
            <p className="free-gift-text"></p>
            <button onClick={() => setIsCartOpen(false)}>✖</button>
          </div>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <div className="item-price">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <button onClick={() => removeItem(item.id)}>✖</button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <p>Tax included. Shipping calculated at checkout.</p>
            <button className="checkout-btn">
              CHECKOUT — ₹{totalAmount.toFixed(2)}
            </button>
          </div>
        </div>
      </div>

      {(isCartOpen || isMenuOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsCartOpen(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </>
  );
}
