import axios from "axios";
import {
  addProductUrl,
  deleteProductUrl,
  getAllProductsForUserUrl,
  getAllProductsUrl,
  getSingleProductUrl,
  updateProductUrl,
} from "../urls";

// function to add a product
export async function addProduct(
  data,
  navigate,
  resetForm,
  setSubmitting,
  imageRef
) {
  try {
    const formData = new FormData();

    // Append fields
    for (const key in data) {
      if (key !== "productImages") {
        formData.append(key, data[key]);
      }
    }

    // Append multiple files
    for (const file of data.productImages) {
      formData.append("productImages", file); // must match multer field name
    }

    const response = await axios.post(addProductUrl, formData, {
      headers: {
        contentType: "multipart/form-data",
      },
    });
    if (response.status === 201 && response.data.isSuccess) {
      resetForm();
      navigate("/admin/products");
      imageRef.current.value = null; // Reset the file input field
      // console.log("successfully added product");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setSubmitting(false);
  }
}

// function to get all products
export async function getAllProducts(setProducts) {
  try {
    const response = await axios.get(getAllProductsUrl, {
      headers: {
        "Content-Type": "application/json",
        // "Authorization":""
      },
    });
    // console.log(response, "response from get all products api");
    if (response.status === 200 && response.data.isSuccess) {
      setProducts(response.data.products);
    }
  } catch (error) {
    console.log(error);
  }
}

// function to get a single product details
export async function getSingleProduct(id, setProduct) {
  try {
    const response = await axios.get(`${getSingleProductUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // "Authorization":""
      },
    });
    // console.log(response, "response from get single product api");
    if (response.status === 200 && response.data.isSuccess) {
      setProduct(response.data.product);
    }
  } catch (error) {
    console.log(error);
  }
}

// function to delete a product permanently
export async function deleteProduct(id, setChanged) {
  try {
    const response = await axios.put(`${deleteProductUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // "Authorization":""
      },
    });
    if (response?.status && response?.data?.isSuccess) {
      console.log("delete success");
      setChanged((prev) => !prev);
      return response?.data.isSuccess;
    }
  } catch (error) {
    console.log(error);
  }
}

// function to get all product for user
export async function getAllProductsForUser(setProducts) {
  try {
    const response = await axios.get(getAllProductsForUserUrl, {
      headers: {
        "Content-Type": "application/json",
        // "Authorization":""
      },
    });
    if (response.status === 200 && response.data.isSuccess) {
      setProducts(response.data.products);
    }
  } catch (error) {
    console.log(error);
  }
}

// function to change the status of the product
export async function changeProductStatus(id, setChanged) {
  try {
    const response = await axios.put(`${updateProductUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // "Authorization":""
      },
    });
    if (response?.status && response?.data?.isSuccess) {
      setChanged((prev) => !prev);
      return response?.data.isSuccess;
    }
  } catch (error) {
    console.log(error);
  }
}