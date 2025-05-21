import React, { useState } from 'react';
import './DashAddressList.css';
import { FiEdit2, FiTrash } from 'react-icons/fi';

function AddressModal({ isOpen, onClose, onSave, initialData }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState(initialData || {
    fullName: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    country: '',
    isPrimary: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>{initialData ? 'Edit Address' : 'Add New Address'}</h2>
        <form className="address-form" onSubmit={handleSubmit}>
          <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} />
          <input name="state" placeholder="State" value={formData.state} onChange={handleChange} />
          <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />

          {/* <label className="checkbox-row">
            <input type="checkbox" name="isPrimary" checked={formData.isPrimary} onChange={handleChange} />
            Set as primary address
          </label> */}

          <div className="modal-actions">
            <button type="button" className="close-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AddressList() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: 'Susan Gardner',
      phone: '555-123-4567',
      address: '514 Magnolia, Orlando, FL 32806, USA',
      city: 'Orlando',
      zip: '32806',
      state: 'FL',
      country: 'USA',
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (address) => {
    setEditData(address);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);
  };

  const handleSave = (data) => {
    if (data.id) {
      // Update
      setAddresses(prev =>
        prev.map(addr => (addr.id === data.id ? data : addr))
      );
    } else {
      // Add
      setAddresses(prev => [
        ...prev,
        { ...data, id: Date.now() }
      ]);
    }
  };

  return (
    <div className="address-list-container">
      <table className="address-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((addr) => (
            <tr key={addr.id}>
              <td>{addr.fullName}</td>
              <td>{addr.address}</td>
              <td>{addr.phone}</td>
              <td className="address-actions">
                 <FiEdit2 onClick={() => handleEdit(addr)} title="Edit" className="icon edit" />
                <FiTrash onClick={() => handleDelete(addr.id)} title="Delete" className="icon delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-address-btn" onClick={() => handleEdit(null)}>Add new address</button>

      <AddressModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={editData}
      />
    </div>
  );
}
