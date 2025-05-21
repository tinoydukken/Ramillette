import "./LoginPage.css"; // We'll add nice styling here
import NavBar from "../../Components/NavBar/NavBar";
import TopHeader from "../../Components/TopHeader/TopHeader";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginUser } from "../../services/userApiServices";
import { useDispatch } from "react-redux";
import { login, updateUserWishList } from "../../redux/slices/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email address"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      // Call your login API here
      const response = await loginUser(
        values,
        navigate,
        resetForm,
        setSubmitting
      );
      if (response) {
        dispatch(login({ user: response?.user, token: response?.token }));
        dispatch(updateUserWishList({ user: response?.wishlist?.products }));
      }
    },
  });

  return (
    <>
      <div className="login-page">
        <TopHeader />
        <NavBar />
      </div>
      <div className="login-container">
        <h1 className="login-title">LOGIN</h1>

        <form className="login-form">
          <div className="login-form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.email}
            />
            {errors?.email && touched?.email && (
              <p className="error-message">{errors?.email}</p>
            )}
          </div>
          <div className="login-form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.password}
            />
            {errors?.password && touched?.password && (
              <p className="error-message">{errors?.password}</p>
            )}
          </div>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <div className="button-group">
            <button
              className="create-btn"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <button
              className="signin-btn"
              onClick={() => navigate("/Register")}
            >
              Create account
            </button>
          </div>
          <div className="return-link">
            <span className="return-icon">↩</span>{" "}
            {/* you can replace with FontAwesome if you want */}
            <a href="#">Return to Store</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
