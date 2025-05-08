import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import "./AdminProductEdit.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function AdminProductEdit() {
  const imageRef = useRef(null);
  const location = useLocation();
  const { product } = location.state || {};
  const [productImages, setProductImages] = useState([]);

  const productValidationSchema = Yup.object().shape({
    productName: Yup.string()
      .required("Product name is required")
      .min(3, "Product name must be at least 3 characters"),

    productShortName: Yup.string()
      .required("Product short name is required")
      .max(20, "Short name can't exceed 20 characters"),

    productPrice: Yup.number()
      .required("Product price is required")
      .typeError("Price must be a number")
      .positive("Price must be greater than 0"),
    productDiscount: Yup.number()
      .required("Product discount is required")
      .typeError("Price discount must be a number")
      .positive("Price discount must be greater than 0")
      .max(100, "Discount cannot exceed 100%")
      .min(0, "Discount cannot be negative"),

    productDescription: Yup.string()
      .required("Product description is required")
      .min(10, "Description must be at least 10 characters"),

    productStock: Yup.number()
      .required("Stock quantity is required")
      .typeError("Stock must be a number")
      .min(0, "Stock cannot be negative"),

    productBenefits: Yup.string()
      .required("Product benefits are required")
      .min(5, "Please describe at least one benefit"),
    productRating: Yup.number()
      .required("Product rating is required")
      .typeError("Product rating must be a number")
      .positive("Product rating must be greater than 0")
      .max(5, "Product rating cannot exceed 5"),
    productUseCase: Yup.string()
      .required("Product use case is required")
      .min(5, "Please describe a use case minimum of 5 characters"),
    productIngredients: Yup.string()
      .required("Product Ingredients is required")
      .min(5, "Please describe a Ingredients minimum of 5 characters"),
    productOtherInfo: Yup.string()
      .min(5, "Please describe a other information minimum of 5 characters")
      .nullable(),

    // productImages: Yup.array()
    //   .of(
    //     Yup.mixed()
    //       .test(
    //         "fileRequired",
    //         "Image is required",
    //         (file) => file instanceof File
    //       )
    //       .test("fileType", "Only image files are allowed", (file) =>
    //         file
    //           ? ["image/jpeg", "image/png", "image/webp"].includes(file.type)
    //           : false
    //       )
    //   )
    //   .min(1, "At least one image is required")
    //   .max(5, "A maximum of 5 images is allowed")
    //   .nullable(),
  });

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    touched,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      productName: "",
      productShortName: "",
      productPrice: "",
      productDiscount: "",
      productDescription: "",
      productStock: "",
      productBenefits: "",
      productRating: "",
      productUseCase: "",
      productImages: [],
      productIngredients: "",
      productOtherInfo: "",
    },
    validationSchema: productValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values, "values");
      //   const processedData = {
      //     ...values,
      //     productBenefits: values.productBenefits
      //       .split("\n")
      //       .map((b) => b.trim())
      //       .filter((b) => b.length > 0),
      //     productUseCase: values.productUseCase
      //       .split("\n")
      //       .map((b) => b.trim())
      //       .filter((b) => b.length > 0),
      //   };
      //   addProduct(processedData, navigate, resetForm, setSubmitting, imageRef);
    },
  });

  // function to handle image upload
  const handleImageChange = (event) => {
    setProductImages([]);
    const files = event.target.files;
    setFieldValue("productImages", [...files]);
    values.productImages = files;
    if (files.length > 5) {
      return;
    }
    setProductImages(files);
  };

  useEffect(() => {
    if (product) {
      setFieldValue("productName", product.productName);
      setFieldValue("productShortName", product.productShortName);
      setFieldValue("productPrice", product.productPrice);
      setFieldValue("productDiscount", product.productDiscount);
      setFieldValue("productDescription", product.productDescription);
      setFieldValue("productStock", product.productStock);
      setFieldValue(
        "productBenefits",
        Array.isArray(product.productBenefits)
          ? product.productBenefits.join("\n")
          : product.productBenefits
      );
      setFieldValue("productRating", product.productRating);
      setFieldValue(
        "productUseCase",
        Array.isArray(product.productUseCase)
          ? product.productUseCase.join("\n")
          : product.productUseCase
      );
      setFieldValue("productIngredients", product.productIngredients);
      setFieldValue("productOtherInfo", product.productOtherInfo);
      // setFieldValue("productImages", product.productImages);
      setProductImages(product.productImages);
    }
  }, [product, setFieldValue]);

  return (
    <div className="admin-edit-product-main-container">
      <div className="admin-edit-product-container">
        <AdminHeader title="Edit Product" />
        <form className="admin-edit-product-form" onSubmit={handleSubmit}>
          <div className="admin-edit-product-form-group">
            <label htmlFor="productName">Product Name</label>
            <div className="admin-edit-product-input-wrapper">
              <input
                type="text"
                className="admin-edit-product-input"
                id="productName"
                name="productName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productName}
              />
              {errors?.productName && touched.productName && (
                <p className="error-message">{errors?.productName}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="productName">Short Name</label>
            <div className="admin-edit-product-input-wrapper">
              <input
                type="text"
                className="admin-edit-product-input"
                id="productShortName"
                name="productShortName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productShortName}
              />
              {errors?.productShortName && touched.productShortName && (
                <p className="error-message">{errors?.productShortName}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-price">Product Price</label>
            <div className="admin-edit-product-input-wrapper">
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                className="admin-edit-product-input"
                onWheel={(e) => e.target.blur()}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productPrice}
              />
              {errors?.productPrice && touched.productPrice && (
                <p className="error-message">{errors?.productPrice}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-price">Product Discount</label>
            <div className="admin-edit-product-input-wrapper">
              <input
                type="number"
                id="productDiscount"
                name="productDiscount"
                className="admin-edit-product-input"
                onWheel={(e) => e.target.blur()}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productDiscount}
              />
              {errors?.productDiscount && touched.productDiscount && (
                <p className="error-message">{errors?.productDiscount}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-description">Product Description</label>
            <div className="admin-edit-product-input-wrapper">
              <textarea
                id="productDescription"
                name="productDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productDescription}
              ></textarea>
              {errors?.productDescription && touched.productDescription && (
                <p className="error-message">{errors?.productDescription}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-price">Product Stock</label>
            <div className="admin-edit-product-input-wrapper">
              <input
                type="number"
                id="productStock"
                name="productStock"
                className="admin-edit-product-input"
                onWheel={(e) => e.target.blur()}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productStock}
              />
              {errors?.productStock && touched.productStock && (
                <p className="error-message">{errors?.productStock}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-description">Product Benefits</label>
            <div className="admin-edit-product-input-wrapper">
              <textarea
                id="productBenefits"
                name="productBenefits"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productBenefits}
                // value={
                //   Array.isArray(values.productBenefits)
                //     ? values.productBenefits.join("\n")
                //     : values.productBenefits
                // }
              ></textarea>
              {errors?.productBenefits && touched.productBenefits && (
                <p className="error-message">{errors?.productBenefits}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-price">Product Rating</label>
            <div className="admin-edit-product-input-wrapper">
              <input
                type="number"
                id="productRating"
                name="productRating"
                className="admin-edit-product-input"
                onWheel={(e) => e.target.blur()}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productRating}
              />
              {errors?.productRating && touched.productRating && (
                <p className="error-message">{errors?.productRating}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-description">Product Use Case</label>
            <div className="admin-edit-product-input-wrapper">
              <textarea
                id="productUseCase"
                name="productUseCase"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.productUseCase}
                value={
                  Array.isArray(values.productUseCase)
                    ? values.productUseCase.join("\n")
                    : values.productUseCase
                }
              ></textarea>
              {errors?.productUseCase && touched.productUseCase && (
                <p className="error-message">{errors?.productUseCase}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-price">Product Images</label>
            <div className="admin-edit-product-input-wrapper">
              <div className="admin-edit-product-input-custom-file">
                <input
                  type="file"
                  id="productImages"
                  name="productImages"
                  className="admin-edit-product-input custom-file-input"
                  onChange={handleImageChange}
                  multiple
                  onBlur={handleBlur}
                  ref={imageRef}
                />
                <div className="admin-edit-product-input-custom-file-btn">
                  <IoCloudUploadOutline />
                  <p>Upload Images</p>
                </div>
              </div>
              {errors?.productImages && touched.productImages && (
                <p className="error-message">{errors?.productImages}</p>
              )}
            </div>
          </div>
          {productImages.length > 0 && (
            <div className="admin-edit-product-images-preview-container">
              <p>Product image preview</p>
              <div className="admin-edit-product-images-preview-section">
                {productImages.length > 0 &&
                  [...productImages].map((image, index) => (
                    <div
                      key={index}
                      className="admin-edit-product-images-preview"
                    >
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/${image}`}
                        alt={`product-image-${index}`}
                      />
                      <div
                        className="admin-edit-product-image-delete-btn"
                        // onClick={() => deleteImage(index)}
                      >
                        <IoClose />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-description">Product Ingredients</label>
            <div className="admin-edit-product-input-wrapper">
              <textarea
                id="productIngredients"
                name="productIngredients"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productIngredients}
              ></textarea>
              {errors?.productIngredients && touched.productIngredients && (
                <p className="error-message">{errors?.productIngredients}</p>
              )}
            </div>
          </div>
          <div className="admin-edit-product-form-group">
            <label htmlFor="product-description">
              Product Other Information
            </label>
            <div className="admin-edit-product-input-wrapper">
              <textarea
                id="productOtherInfo"
                name="productOtherInfo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.productOtherInfo}
              ></textarea>
              {errors?.productOtherInfo && touched.productOtherInfo && (
                <p className="error-message">{errors?.productOtherInfo}</p>
              )}
            </div>
          </div>
          <button type="submit" className="admin-edit-product-submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
