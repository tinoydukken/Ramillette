const serverUrl = import.meta.env.VITE_BASE_URL

// user apis
export const registerUserUrl =  serverUrl+"/api/user/register";
export const loginUserUrl = serverUrl+"/api/user/login";
export const getAllProductsForUserUrl = serverUrl+"/api/user/getUserBulkProduct";
export const  getLatestProductUrl = serverUrl+"/api/user/getLatestProduct";



// Admin apis
export const addProductUrl = serverUrl+"/api/admin/products/addProduct";
export const getAllProductsUrl = serverUrl+"/api/admin/products/getAllProducts";
export const getSingleProductUrl = serverUrl+"/api/admin/products/getSingleProduct";
export const deleteProductUrl = serverUrl+"/api/admin/products/deleteProduct";
export const updateProductUrl = serverUrl+"/api/admin/products/updateProductStatus";
export const adminRegisterUrl = serverUrl+"/api/admin/register";
export const adminLoginUrl = serverUrl+"/api/admin/login";
export const getAllUsersUrl = serverUrl+"/api/admin/getUsers";

// wishlist apis
export const addToWishlistUrl = serverUrl+"/api/user/addToWishlist";
export const removeFromWishListUrl = serverUrl+"/api/user/removeFromWishlist";
export const getUserWishlistUrl = serverUrl+"/api/user/getUserWishlist"