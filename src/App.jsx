import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Productlist from "./Pages/Productlist/Productlist";
import ProductInnerPage from "./Pages/ProductInnerpage/ProductInnerPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AdminMainLayout from "./Pages/AdminLayout/AdminMainLayout";
import AddProduct from "./Pages/AddProduct/AddProduct";
import AdminProductList from "./Pages/AdminProductList/AdminProductList";
import AdminProductEdit from "./Pages/AdminProductEdit/AdminProductEdit";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminUsers from "./Pages/AdminUsers/AdminUsers";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<Productlist />} />
          <Route path="/product-inner/:id" element={<ProductInnerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/AdminDashboard" element={<AdminDashboard />} />
          {/* Admin ui section */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<AdminMainLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/products" element={<AdminProductList />} />
            <Route path="/admin/add-new-product" element={<AddProduct />} />
            <Route
              path="/admin/edit-product/:id"
              element={<AdminProductEdit />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
