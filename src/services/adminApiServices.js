import axios from "axios";
import { adminLoginUrl, adminRegisterUrl, getAllUsersUrl } from "../urls";

// function to register admin
export async function adminRegister(data) {
  try {
    const response = await axios.post(adminRegisterUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.status === 200 && response?.data?.isSuccess) {
      console.log("Admin registered successfully:", response?.data);
    }
  } catch (error) {
    console.log("Error in adminRegister:", error);
  }
}

export async function adminLogin(data, resetForm, setSubmitting, navigate) {
  try {
    const response = await axios.get(adminLoginUrl, {
      headers: {
        "Content-Type": "application/json",
        ...data,
      },
    });
    if (response?.status === 200 && response?.data?.isSuccess) {
      localStorage.setItem("adminToken", response?.data?.token);
      navigate("/admin/dashboard");
      resetForm();
    }
  } catch (error) {
    console.log("Error in adminLogin:", error);
  } finally {
    setSubmitting(false);
  }
}

// function to fetch the users list
export async function getAllUsers(setUsers) {
  try {
    const response = await axios.get(getAllUsersUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.status === 200 && response?.data?.isSuccess) {
      setUsers(response?.data?.users);
    }
  } catch (error) {
    console.log("Error while getting user details", error);
  }
}
