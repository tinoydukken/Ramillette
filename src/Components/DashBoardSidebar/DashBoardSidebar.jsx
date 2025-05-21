import React from 'react';
import './DashboardSidebar.css'; // Optional: for custom CSS styling
import { FaBoxOpen, FaHeart, FaTicketAlt, FaUser, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';
import dashboardprofile from "../../assets/images/avathar-1.jpeg"

export default function DashBoardSidebar() {
    return (
        <div className="dashboard-sidebar">
            <div className="profile-section">
                <div className="profile-image-wrapper">
                    <img src={dashboardprofile} alt="User" className="profile-image" />
                    <span className="notification-badge">384</span>
                </div>
                <div className="profile-info">
                    <h3>Susan Gardner</h3>
                    <p className="email">s.gardner@example.com</p>
                </div>
            </div>

            <div className="menu-section">
                <p className="section-title">Dashboard</p>
                <ul className="Dash-menu-list">
                    <li className="Dash-menu-item active">
                        <FaBoxOpen className="icon" />
                        <span>Orders</span>
                        <span className="item-count">1</span>
                    </li>
                    <li className="Dash-menu-item">
                        <FaHeart className="icon" />
                        <span>Wishlist</span>
                        <span className="item-count">3</span>
                    </li>

                </ul>
            </div>

            <div className="Dash-menu-section">
                <p className="section-title">Account settings</p>
                <ul className="Dash-menu-list">
                    <li className="Dash-menu-item">
                        <FaUser className="icon" />
                        <span>Profile info</span>
                    </li>
                    <li className="Dash-menu-item">
                        <FaMapMarkerAlt className="icon" />
                        <span>Addresses</span>
                    </li>
                    <li className="Dash-menu-item">
                        <FaCreditCard className="icon" />
                        <span>Payment methods</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

