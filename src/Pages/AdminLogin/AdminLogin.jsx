import "./AdminLogin.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { adminLogin } from "../../services/adminApiServices";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("userName is required")
      .min(3, "userName must be at least 3 characters"),
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
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      // Call the login function from the API service
      adminLogin(values,resetForm,setSubmitting,navigate);
      // adminRegister(values)
    },
  });

  return (
    <div className="admin-login-container">
      <h1 className="admin-login-title">LOGIN</h1>
      <form className="admin-login-form">
        <div className="admin-login-form-group">
          <input
            type="text"
            name="userName"
            placeholder="UserName"
            className="login-input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.userName}
          />
          {errors?.userName && touched?.userName && (
            <p className="error-message">{errors?.userName}</p>
          )}
        </div>
        <div className="admin-login-form-group">
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
        <div className="admin-button-group">
          <button
            className="create-btn"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
