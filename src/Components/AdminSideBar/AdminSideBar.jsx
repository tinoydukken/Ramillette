import { Link, useNavigate } from "react-router-dom";
import "./AdminSideBar.css";

const navLinks = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    name: "Users",
    link: "/admin/users",
  },
  {
    name: "Products",
    link: "admin/products",
  },
  {
    name: "Add New Product",
    link: "/admin/add-new-product",
  },
  {
    name: "Orders",
    // link: "/orders",
  },
  {
    name: "Settings",
    // link: "/settings",
  },
  {
    name: "Logout",
    // link: "/logout",
  },
];

export default function AdminSideBar() {
  const navigate = useNavigate();
  return (
    <div className="admin-side-bar-container">
      <div className="dashboard-title-container">
        <p className="dashboard-title">Admin Dashboard</p>
      </div>
      <div className="admin-side-bar-nav-container">
        <div className="admin-side-bar-nav">
          {navLinks.map((item, index) => (
            <div key={index} className="admin-side-bar-nav-item">
              <p
                onClick={() => navigate(item.link)}
                className="admin-side-bar-nav-link"
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
