import React from 'react';
import './LoginPage.css'; // We'll add nice styling here
import NavBar from '../../Components/NavBar/NavBar';
import Topheader from '../../Components/TopHeader/Topheader';
import Footer from '../../Components/Footer/Footer';

const LoginPage = () => {
    return (
        <>
            <div className="login-page">
                <Topheader />
                <NavBar />
            </div>
            <div className="login-container">
                <h1 className="login-title">LOGIN</h1>

                <form className="login-form">
                    <input type="email" placeholder="Email" className="login-input" />
                    <input type="password" placeholder="Password" className="login-input" />
                    <a href="#" className="forgot-password">Forgot password?</a>
                    <div className="button-group">
                        <button className="create-btn">Sign in</button>
                        <button className="signin-btn">Create account</button>
                    </div>
                    <div className="return-link">
                        <span className="return-icon">↩</span> {/* you can replace with FontAwesome if you want */}
                        <a href="#">Return to Store</a>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
