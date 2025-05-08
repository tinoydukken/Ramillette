const serverUrl = import.meta.env.VITE_BASE_URL

// user apis
export const registerUserUrl =  serverUrl+"/api/user/register";
export const loginUserUrl = serverUrl+"/api/user/login";
export const getAllProductsForUserUrl = serverUrl+"/api/user/getUserBulkProduct";



// Admin apis
export const addProductUrl = serverUrl+"/api/admin/products/addProduct";
export const getAllProductsUrl = serverUrl+"/api/admin/products/getAllProducts";
export const getSingleProductUrl = serverUrl+"/api/admin/products/getSingleProduct";
export const deleteProductUrl = serverUrl+"/api/admin/products/deleteProduct";
export const updateProductUrl = serverUrl+"/api/admin/products/updateProductStatus";