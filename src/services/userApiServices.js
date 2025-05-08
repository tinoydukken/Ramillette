import axios from "axios";
import { loginUserUrl, registerUserUrl } from "../urls";


// function to register user
export async function registerUser(data, navigate, resetForm, setSubmitting) {
  try {
    const response = await axios.post(registerUserUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.status === 200 && response?.data?.isSuccess) {
      resetForm();
      navigate("/Login");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
}

// function to login user
export async function loginUser(data, navigate, resetForm, setSubmitting) {
  try {
    const response = await axios.get(loginUserUrl, {
      headers: {
        "Content-Type": "application/json",
        ...data,
      },
    });
    if (response?.status === 200 && response?.data?.isSuccess) {
      resetForm();
      navigate("/");
      return response?.data
    }
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
}


