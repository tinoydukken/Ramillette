import React from 'react';
import './WishlistSection.css';
import { FaTrashAlt } from 'react-icons/fa';
import perfume from '../../assets/images/perfume.png'
const wishlistItems = [
  {
    id: 1,
    name: 'TH Jeans City Backpack',
    brand: 'Tommy Hilfiger',
    price: 79.50,
  },
  {
    id: 2,
    name: '3-Color Sun Stash Hat',
    brand: 'The North Face',
    color: 'Pink / Beige / Dark blue',
    price: 22.50,
  },
  {
    id: 3,
    name: 'Cotton Polo Regular Fit',
    brand: 'The North Face',
    color: 'Light blue',
    price: 9.00,

  }
];

export default function WishlistSection() {
  return (
    <div className="wishlist-section">
      {wishlistItems.map(item => (
        <div className="wishlist-item" key={item.id}>
          <div className="wishlist-left">
            <img src={perfume} alt={item.name} className="wishlist-img" />
            <div className="wishlist-details">
              <h4>{item.name}</h4>
              <p><strong>Brand:</strong> {item.brand || '—'}</p>
              <p className="wishlist-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <button className="remove-btn">
            <FaTrashAlt />
            <span>Remove</span>
          </button>
        </div>
      ))}
    </div>
  );
}
