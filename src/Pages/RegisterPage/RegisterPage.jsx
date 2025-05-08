import "./RegisterPage.css";
import NavBar from "../../Components/NavBar/NavBar";
import Topheader from "../../Components/TopHeader/Topheader";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerUser } from "../../services/userApiServices";

export default function RegisterPage() {
  const navigate = useNavigate();

  const nameRegex = /^[A-Za-z\s]+$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .matches(nameRegex, "First name can only contain letters and spaces"),
    lastName: Yup.string()
      .matches(nameRegex, "Last name can only contain letters and spaces")
      .nullable(),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // function to handle form submission
      registerUser(values, navigate, resetForm, setSubmitting);
    },
  });

  return (
    <>
      <div className="register-page">
        <Topheader />
        <NavBar />
        <div className="auth-form">
          <h1 className="login-title">SIGN UP</h1>
          <div className="register-form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors?.firstName && touched?.firstName && (
              <p className="error-message">{errors?.firstName}</p>
            )}
          </div>
          <div className="register-form-row">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors?.lastName && touched?.lastName && (
              <p className="error-message">{errors?.lastName}</p>
            )}
          </div>
          <div className="register-form-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors?.email && touched?.email && (
              <p className="error-message">{errors?.email}</p>
            )}
          </div>
          <div className="register-form-row">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors?.password && touched?.password && (
              <p className="error-message">{errors?.password}</p>
            )}
          </div>

          {/* <label className="checkbox-container">
                        <input type="checkbox" />
                        <span>Register to our newsletter</span>
                    </label> */}

          <div className="button-group">
            <button
              disabled={isSubmitting}
              className="create-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Create
            </button>
            <button className="signin-btn" onClick={() => navigate("/Login")}>
              Sign in
            </button>
          </div>

          <div className="return-link">
            <span className="arrow">↶</span> <a href="/">Return to Store</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
