import './RegisterPage.css'
import NavBar from '../../Components/NavBar/NavBar';
import Topheader from '../../Components/TopHeader/Topheader';
import Footer from '../../Components/Footer/Footer';
export default function RegisterPage() {
    return (
        <>
            <div className="register-page">
                <Topheader />
                <NavBar />
                <div className="auth-form">
                    <h1 className="login-title">SIGN UP</h1>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    {/* <label className="checkbox-container">
                        <input type="checkbox" />
                        <span>Register to our newsletter</span>
                    </label> */}

                    <div className="button-group">
                        <button className="create-btn">Create</button>
                        <button className="signin-btn">Sign in</button>
                    </div>

                    <div className="return-link">
                        <span className="arrow">↶</span> <a href="/">Return to Store</a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
