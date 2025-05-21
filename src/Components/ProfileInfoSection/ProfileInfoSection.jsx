import React, { useState } from 'react';
import './ProfileInfoSection.css';
import { FaEyeSlash } from 'react-icons/fa';
import profileinfoimage from '../../assets/images/avathar-1.jpeg'


export default function ProfileInfoSection() {
  const [formData, setFormData] = useState({
    firstName: 'Susan',
    lastName: 'Gardner',
    email: 's.gardner@example.com',
    phone: '+7 (805) 348 95 72',
    password: '',
    confirmPassword: '',
    newsletter: true,
    avatar: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="profile-info-section">
      <div className="avatar-section">
        <img
          src={profileinfoimage}
          alt="avatar"
          className="profile-avatar"
        />
        <div>
          <button className="change-avatar-btn">Change avatar</button>
          <p className="avatar-note">Upload JPG, GIF or PNG image. 300 x 300 required.</p>
        </div>
      </div>

      <div className="profile-form-grid">
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group password-group">
          <label>New Password</label>
          <div className="password-input">
            <input name="password" type="password" placeholder="Enter password" onChange={handleChange} />
            <FaEyeSlash className="eye-icon" />
          </div>
        </div>
        <div className="form-group password-group">
          <label>Confirm Password</label>
          <div className="password-input">
            <input name="confirmPassword" type="password" onChange={handleChange} />
            <FaEyeSlash className="eye-icon" />
          </div>
        </div>
      </div>

      <div className="newsletter-row">
        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <span>Subscribe me to Newsletter</span>
        </label>
      </div>

      <button className="update-profile-btn">Update profile</button>
    </div>
  );
}
